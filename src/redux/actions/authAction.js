import axios from 'axios';

export const fetchLogin = (username, password) => {
  return (dispatch) => {
    const userData = new FormData();
    userData.append('username', 'superadmin@gmail.com');
    userData.append('password', 'Abc@12345');
    userData.append('grant_type', 'password');
    axios
      .post(`http://192.168.1.150:8000/api/v1/oauth2/login`, userData, {
        method: 'POST',
        headers: {
          Accept: 'application/json',
          'Content-Type': 'multipart/form-data',
        },
      })
      .then((response) => {
        // console.log(response.data);
        dispatch(fetchLoginSuccess(response.data));
      })
      .catch((error) => console.error('Login Failed: ', error));
  };
};

export const fetchLoginSuccess = (data) => {
  // console.log(data);
  return {
    type: 'LOGIN_SUCCESS',
    ...data,
  };
};
