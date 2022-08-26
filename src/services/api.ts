import axios from "axios";
import { getUserLocalStorage } from "../context/AuthProvider/util";
import { useAuth } from "../context/AuthProvider/useAuth";

export const Api = axios.create({
  baseURL: "http://localhost:8080/api", //Mudar
});

Api.interceptors.request.use(
  (config: any) => {
    const user = getUserLocalStorage();

    config.headers.authorization = user?.access_token;

    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);
