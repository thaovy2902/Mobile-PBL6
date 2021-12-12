import jwt_decode from 'jwt-decode';
const initialState = {
  token: null,
  user: null,
  refreshToken: null,
  scopes: [],
  profile: null,
};
export default loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case "LOGIN_SUCCESS":
      const {sub, iat, exp, nbf, scope} = jwt_decode(action.access_token);
      return {
        ...state,
        token: action.access_token,
        refreshToken: action.refresh_token,
        scopes: scope,
      };
    default: return state
  }  
};
