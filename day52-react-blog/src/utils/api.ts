import Axios from 'axios';
import { parseError } from './parseError';

export const Api = Axios.create({
  baseURL: 'http://localhost:8000/api',
});

Api.interceptors.request.use(function (config) {
  console.log("[Api] Request sent", config);
  return config;
}, function (error) {
  console.log("[Api] Error in sending request");
  return Promise.reject(error);
});

Api.interceptors.response.use(function (response) {
  console.log("[Api] Response", response);
  return response.data;
}, function (error) {
  console.log("[Api] Error in response",);
  return Promise.reject(parseError(error));
});


export default Api;