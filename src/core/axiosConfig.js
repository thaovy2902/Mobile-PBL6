const axios = require('axios');
import { store } from '../redux/store';
const axiosConfig = axios.create({
  baseURL: 'http://192.168.1.8:8000/api/v1/',
});

axiosConfig.interceptors.request.use(
  async (request) => {
    const access_token = store.getState().authReducer.token;
    request.headers['Authorization'] = `Bearer ${access_token}`;
    return request;
  },
  (error) => {
    Promise.reject(error);
  }
);

axiosConfig.interceptors.response.use(
  async (response) => {
    return response;
  },
  (error) => {
    Promise.reject(error);
  }
);

export default axiosConfig;
