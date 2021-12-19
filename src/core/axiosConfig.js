import AsyncStorage from '@react-native-async-storage/async-storage';

const axios = require('axios');
const axiosConfig = axios.create({
  baseURL: 'http://192.168.1.8:8000/api/v1/',
});

axiosConfig.interceptors.request.use(
  async (request) => {
    const access_token = await AsyncStorage.getItem('token');
    request.headers['Authorization'] = `Bearer ${JSON.parse(access_token)}`;
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
