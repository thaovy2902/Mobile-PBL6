import jwt_decode from 'jwt-decode';

const initialState = {
  token: null,
  user: null,
  refreshToken: null,
  scopes: [],
  profile: null,
  userID: null,
  error: false,
  isAdmin: false,
};
export default authReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'LOGIN_SUCCESS':
      const { sub, iat, exp, nbf, scope } = jwt_decode(action.access_token);
      return {
        ...state,
        token: action.access_token,
        refreshToken: action.refresh_token,
        scopes: scope,
        userID: sub,
        error: false,
      };
    case 'LOGIN_FAILURE':
      return {
        ...state,
        error: true,
      };
    case 'IS_ADMIN':
      return {
        ...state,
        isAdmin: action.data,
      };
    case 'RESET_ERROR':
      return {
        ...state,
        error: false,
      };
    case 'RESET_AUTH':
      return {
        token: null,
        user: null,
        refreshToken: null,
        scopes: [],
        profile: null,
        userID: null,
        error: false,
        isAdmin: false,
      };
    default:
      return state;
  }
};
