import instance from "@/app/_lib/axios";
import { API_ERROR_MESSAGE } from "../../_constants/error-message";
import { UserType } from "../../_constants/user-type";
import { isAxiosError } from "axios";
import { AddressType } from "@/app/_constants/address";
import notification from "@/app/_util/notification";
import { getCookie } from "@/app/_util/cookie";
import { PutUsersUserId, UserProfileData } from "../type";

// 회원가입
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
type PostSignUp = (params: Params) => Promise<boolean>;

export const postSignUp: PostSignUp = async ({ email, password, type }) => {
  try {
    const response = await instance.post<Response>(
      "/users",
      {
        email,
        password,
        type,
      },
      {
        authorization: false,
      },
    );
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

// 내 정보 조회
export async function getUser(user_id: string): Promise<UserProfileData> {
  try {
    const res = await instance.get<UserProfileData>(`/users/${user_id}`);
    return res.data;
  } catch (error) {
    console.error("getUser 함수에서 오류 발생:", error);
    throw error;
  }
}

type putUserProfileParams = {
  name: string;
  phone: string;
  address: AddressType;
};

export async function putUserProfile(params: putUserProfileParams) {
  try {
    const userId = await getCookie("userId");
    const res = await instance.put<PutUsersUserId>(`/users/${userId}`, params);
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (
        error.response?.status === 403 ||
        error.response?.status === 404 ||
        error.response?.status === 400
      ) {
        const message = error.response.data.message;
        notification(`${message ?? ""}`, "error");
      }
    } else {
      notification(`${API_ERROR_MESSAGE}`, "error");
    }
    throw new Error(API_ERROR_MESSAGE);
  }
}
