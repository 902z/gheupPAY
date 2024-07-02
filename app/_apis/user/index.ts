import instance from "@/app/_lib/axios";
import { API_ERROR_MESSAGE } from "../../_constants/error-message";
import { UserType } from "../../_constants/user-type";
import axiosInstance from "../instances";
import { AxiosError, isAxiosError } from "axios";
import { PutUsersUserId, UserProfileData } from "../type";
import { AddressType } from "@/app/_constants/address";
import notification from "@/app/_util/notification";

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
    const response = await axiosInstance.post<Response>(
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

export async function putUserProfile(
  userId: string,
  params: putUserProfileParams,
) {
  try {
    const res = await axiosInstance.put<PutUsersUserId>(
      `/users/${userId}`,
      params,
    );
    return res.data;
  } catch (error) {
    const message = (error as AxiosError<{ message: string }>).response?.data
      .message;
    notification(`Error while fetching. ${message ?? ""}`, "error");
    throw error;
  }
}
