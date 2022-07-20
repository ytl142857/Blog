import axios from "axios";
import { $storage } from "./storage";
import { message as antdMessage, message } from "antd";

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
        antdMessage.error(message);
        return Promise.reject(res);
      }
      return res;
    },
    (err) => {
      if (err.code === 400) {
        $storage.clear();
      }
      antdMessage.error(err?.data.message || "数据获取错误");
      return Promise.reject(err);
    }
  );

  return client;
};

export const $http = createHttp();
