import axios from "axios";
import { $storage } from "./storage";

const createHttp = () => {
  const client = axios.create();

  client.interceptors.request.use((config) => {
    const token = $storage.token;

    return token
      ? {
          ...config,
          headers: {
            ...config.headers,
            Authorization: `Bearer ${token}`,
          },
        }
      : config;
  });

  client.interceptors.response.use(
    (res) => {
      const { data = {} } = res;
      const { code, message } = data;

      if (code && code !== 200) {
        if (code === 401) {
          $storage.clear();
          return Promise.reject(res);
        }
        return Promise.reject(res);
      }
      return res;
    },
    (err) => {
      if (err.code === 400 || err.code === 401) {
        $storage.clear();
      }
      return Promise.reject(err);
    }
  );

  return client;
};

export const $http = createHttp();
