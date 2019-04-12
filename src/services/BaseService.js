import axios from 'axios';

const  REACT_APP_API_URL = process.env.REACT_APP_API_URL

const http = axios.create({
  baseURL: REACT_APP_API_URL,
  withCredentials: true
})

http.interceptors.response.use(
  (response) => response,
  (error) => error.status === 403 ? window.location = "/login" : Promise.reject(error)
);

export default http;