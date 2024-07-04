import axios from "axios";
import { getCookie } from "../_util/cookie";

declare module "axios" {
  export interface AxiosRequestConfig {
    authorization?: boolean;
  }
}

const instance = axios.create({
  baseURL: process.env.NEXT_PUBLIC_GHEUP_PAY_BASE_URL,
  timeout: 20000,
  authorization: true,
});

instance.interceptors.request.use(
  async (config) => {
    const hasConfig =
      !config.authorization || !config.headers || config.headers.Authorization;
    if (hasConfig) {
      return config;
    }
    const accessToken = await getCookie("accessToken");

    if (!accessToken) return config;
    config.headers.Authorization = `Bearer ${accessToken}`;
    return config;
  },
  (error) => {
    return Promise.reject(error);
  },
);

export default instance;
