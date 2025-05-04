import axios from 'axios';
import { URL_API } from '../config';

// Create and export the axios instance (not just axios)
const axiosInstance = axios.create({
  baseURL: URL_API, // This will be proxied through Vite's dev server
  withCredentials: false,
});

export default axiosInstance;
