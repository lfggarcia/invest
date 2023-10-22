import axios from 'axios';
import {API_KEY, API_URL} from '@env';

const instance = axios.create({
  baseURL: API_URL,
});

instance.interceptors.request.use(config => {
  config.params = {
    token: API_KEY,
    ...config.params,
  };

  return config;
});

export default instance;
