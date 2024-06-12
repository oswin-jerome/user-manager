import axios from "axios";

export const axiosInstance = axios.create({
  baseURL: "http://127.0.0.1:5500",
});

axiosInstance.interceptors.request.use(function (config) {
  console.log(config.baseURL);

  return config;
});
