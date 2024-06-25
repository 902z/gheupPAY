import { API_ERROR_MESSAGE } from "../../_constants/error-message";
import { UserType } from "../../_constants/user-type";
import axiosInstance from "../api";
import { isAxiosError } from "axios";

interface Params {
  email: string;
  password: string;
  type: string;
}

interface Response {
  item: {
    id: string;
    email: string;
    type: UserType;
  };
  links: string[];
}
export type PostSignUp = (params: Params) => Promise<boolean>;

const postSignUp: PostSignUp = async ({ email, password, type }) => {
  try {
    const response = await axiosInstance.post<Response>("/users", {
      email,
      password,
      type,
    });
    return response.status === 201;
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
