import axios from 'axios';

const apiUrl = import.meta.env.VITE_API_BASE_URL;

const axiosInstance = axios.create({
  baseURL: apiUrl,
  withCredentials: true, // hanya jika diperlukan untuk cookies
});

// Add a request interceptor
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem('token');
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// Add a response interceptor
axiosInstance.interceptors.response.use(
  (response) => response,
  async (error) => {
    if (error.response && error.response.status === 401) {
      // Token mungkin kadaluarsa atau tidak valid
      // Misalnya, arahkan pengguna untuk login ulang
      // atau minta token baru di sini
    }
    return Promise.reject(error);
  }
);

export default axiosInstance;
