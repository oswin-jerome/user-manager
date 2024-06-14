import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5500",
});

axiosInstance.interceptors.request.use(function (config) {
  const token = localStorage.getItem("token");
  if (token) {
    config.headers.Authorization = token;
  }

  return config;
});

axiosInstance.interceptors.response.use(
  (res) => {
    return res;
  },
  (err) => {
    // Remove token if it is invalid
    if (err.response.status === 401) {
      localStorage.removeItem("token");
    }

    if (err.response.status === 422) {
      return err;
    }
    return Promise.reject(err);
  }
);
