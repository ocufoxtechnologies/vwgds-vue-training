import { axiosKey } from "@/keys";
import axios from "axios";

const http = axios.create({
  baseURL: "http://localhost:3000",
});

http.interceptors.request.use((config) => {
  console.log("Request Interceptor called", config.url);
  const token = localStorage.getItem("token");
  config.headers.Authorization = `Bearer ${token}`;
  return config;
});

http.interceptors.response.use((res) => {
  console.log("Response Interceptor called", res.config.url);
  return res;
});

export default {
  install(app, config) {
    app.provide(axiosKey, http);
  },
};
