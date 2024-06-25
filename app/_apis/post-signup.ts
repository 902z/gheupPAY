import { API_ERROR_MESSAGE } from "../_constants/error-message";
import axiosInstance from "./api";
import { isAxiosError } from "axios";

interface Param {
  email: string;
  password: string;
  type: string;
}

export type PostSignUp = (param: Param) => Promise<boolean>;

const postSignUp: PostSignUp = async ({ email, password, type }) => {
  try {
    const response = await axiosInstance.post(`/users`, {
      email,
      password,
      type,
    });
    if (response.status === 201) {
      return true;
    } else {
      return false;
    }
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 409) {
        throw new Error(error.response.data.message);
      }
    }
    console.log(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};

export default postSignUp;
