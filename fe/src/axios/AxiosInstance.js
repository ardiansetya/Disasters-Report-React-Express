import axios from "axios";

const axiosInstance = axios.create({
    baseURL: `${import.meta.env.VITE_BASE_URL_API}`,
    headers: {
        "Content-Type": "application/json",
    },
});



// Menambahkan interceptor untuk request
axiosInstance.interceptors.request.use(
    (config) => {
        const token = localStorage.getItem('authToken'); // Ambil token dari localStorage
        if (token) {
            config.headers.Authorization = `Bearer ${token}`; // Menambahkan token ke header Authorization
        }
        return config;
    },
    (error) => {
        return Promise.reject(error);
    }
);

export default axiosInstance;
