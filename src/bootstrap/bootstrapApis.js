import axios from 'axios';
import { LOCAL_URL } from '../utils/Constant';

export const api = axios.create({
  headers: {
    'X-Requested-With': 'XMLHttpRequest',
    'Content-Type': 'application/json',
    'Accept-Encoding': 'gzip',
  },
  baseURL: LOCAL_URL,
  timeout: 3000,
});

api.interceptors.request.use((request) => {
  console.log('>>> Request', request);
  return request;
});

api.interceptors.response.use(
    (response) => {
      console.log('<<< Response:', response);
      return response;
    },
    (error) => {
      console.log('*** ', error);
      return Promise.reject(error);
    },
);
