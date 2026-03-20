import axios from "axios";

const axiosInstance = axios.create({
  baseURL: `${import.meta.env.VITE_SERVER_URL}/api`,
  timeout: 10000,
  headers: {
    "Content-Type": "application/json",
  },
});

// 🔹 Request Interceptor (attach token if exists)
axiosInstance.interceptors.request.use(
  (config) => {
    const token = localStorage.getItem("token"); // or from cookies/store
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => Promise.reject(error)
);

// 🔹 Response Interceptor (handle global errors)
axiosInstance.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response) {
      // Example: Unauthorized
      if (error.response.status === 401) {
        console.error("Unauthorized! Redirecting...");
        // window.location.href = "/login";
      }

      // Example: Server error
      if (error.response.status >= 500) {
        console.error("Server error. Try again later.");
      }
    } else if (error.request) {
      console.error("No response from server");
    } else {
      console.error("Request error:", error.message);
    }

    return Promise.reject(error);
  }
);

export default axiosInstance;