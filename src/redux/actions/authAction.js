import axios from 'axios';
import jwt_decode from 'jwt-decode';
import AsyncStorage from '@react-native-async-storage/async-storage';

const setLoginLocal = async (token) => {
  try {
    await AsyncStorage.setItem('token', JSON.stringify(token.access_token));
  } catch (err) {
    console.log(err);
  }
};

export const fetchLogin = (email, password) => {
  return (dispatch) => {
    const userData = new FormData();
    userData.append('username', email);
    userData.append('password', password);
    userData.append('grant_type', 'password');
    axios
      .post(`http://192.168.1.8:8000/api/v1/oauth2/login`, userData, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        setLoginLocal(response.data);
        dispatch(fetchLoginSuccess(response.data));
        dispatch(handleIsAdmin(response.data.access_token));
      })
      .catch((error) => {
        if (error.response.status === 400) {
          dispatch(fetchLoginFailure());
        }
      });
  };
};

export const logOut = () => {
  return (dispatch) => {
    dispatch(resetAuth());
    AsyncStorage.removeItem('token');
  };
};

export const handleIsAdmin = (accessToken) => {
  return (dispatch) => {
    const { sub, iat, exp, nbf, scope } = jwt_decode(accessToken);
    console.log(sub);
    axios
      .get(`http://192.168.1.8:8000/api/v1/user/${sub}`, {
        method: 'GET',
        headers: {
          Accept: 'application/json',
          Authorization: `Bearer ${accessToken}`,
        },
      })
      .then((response) => {
        dispatch(fetchIsAdmin(response.data.admin));
      })
      .catch((error) => console.log('error'));
  };
};

export const fetchLoginSuccess = (data) => {
  return {
    type: 'LOGIN_SUCCESS',
    ...data,
  };
};

export const fetchIsAdmin = (data) => {
  return {
    type: 'IS_ADMIN',
    data,
  };
};

export const fetchLoginFailure = () => {
  return {
    type: 'LOGIN_FAILURE',
  };
};

export const resetError = () => ({
  type: 'RESET_ERROR',
});

export const resetAuth = () => ({
  type: 'RESET_AUTH',
});
