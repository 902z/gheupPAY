import axios from "axios";
const GHEUP_PAY_BASE_URL = process.env.NEXT_PUBLIC_GHEUP_PAY_BASE_URL;

const axiosInstance = axios.create({
  baseURL: GHEUP_PAY_BASE_URL,
  timeout: 20000,
});

export default axiosInstance;