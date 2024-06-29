import axios from "axios";
import { getCookie } from "../_util/cookie";
const GHEUP_PAY_BASE_URL = process.env.NEXT_PUBLIC_GHEUP_PAY_BASE_URL;

declare module "axios" {
  export interface AxiosRequestConfig {
    authorization?: boolean;
  }
}

const axiosInstance = axios.create({
  baseURL: GHEUP_PAY_BASE_URL,
  timeout: 20000,
  authorization: true,
});

axiosInstance.interceptors.request.use(
  async (config) => {
    if (
      !config.authorization ||
      !config.headers ||
      config.headers.Authorization
    ) {
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

export default axiosInstance;
