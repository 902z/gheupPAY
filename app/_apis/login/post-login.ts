import axiosInstance from "../instances";
import { UserType } from "../../_constants/user-type";
import { isAxiosError } from "axios";
import { API_ERROR_MESSAGE } from "../../_constants/error-message";
import { setCookie } from "@/app/_util/cookie";

interface Params {
  email: string;
  password: string;
}

interface Response {
  item: {
    token: string; // jwt 토큰 decode하면 payload에 userId 활용 가능 (참고)
    user: {
      item: {
        id: string;
        email: string;
        type: UserType;
        name?: string; // optional
        phone?: string; // optional
        address?: string; // optional
        bio?: string; // optional
      };
      href: string;
    };
  };
  links: [];
}

export type PostLogin = (params: Params) => Promise<Response>;

const postLogin: PostLogin = async ({ email, password }) => {
  try {
    const { data } = await axiosInstance.post<Response>(
      "/token",
      {
        email,
        password,
      },
      {
        authorization: false,
      },
    );
    await setCookie("accessToken", data.item.token);
    await setCookie("userId", data.item.user.item.id);
    await setCookie("type", data.item.user.item.type);
    return data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(error.response.data.message);
      }
    }
    console.log(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};

export default postLogin;
