import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
});

axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      console.log("Token ditemukan:", token); // Untuk debugging
      config.headers.Authorization = `Bearer ${token}`;
    } else {
      console.log("Token tidak ditemukan"); // Untuk debugging
    }
    return config;
  },
  (error) => Promise.reject(error)
);

axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      
      window.location.href = "/login";
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
