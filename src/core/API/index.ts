import axios from 'axios';
import {API_KEY, API_URL} from '@env';

const instance = axios.create({
  baseURL: API_URL,
});

instance.defaults.headers.common.Accept = 'application/json';
instance.defaults.headers.common['Content-Type'] = 'application/json';

instance.interceptors.request.use(config => {
  config.params = {
    ...config.params,
    token: API_KEY,
  };

  return config;
});

export default instance;
