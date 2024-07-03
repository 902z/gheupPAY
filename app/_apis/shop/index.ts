import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../instances";
import instance from "@/app/_lib/axios";
import {
  GetShopsShopId,
  GetShopsShopIdNoticesNoticeId,
  GetUsersUserId,
  UserProfileData,
} from "../type";

import { AddressType } from "@/app/_constants/address";
import { CategoryType } from "@/app/_constants/category";
import { isAxiosError } from "axios";
import { API_ERROR_MESSAGE } from "@/app/_constants/error-message";
import { getImageUrl } from "../image";

// 가게 정보 조회
export async function getShopDetail(shop_id: string) {
  try {
    const res = await instance.get(`/shops/${shop_id}`);
    return res.data;
  } catch (error) {
    console.error("getShopDetail 함수에서 오류 발생:", error);
    throw error;
  }
}

// 4. 가게의 특정 공고 조회
export async function getShopNoticeDetail(
  shop_id: string,
  notice_id: string,
): Promise<GetShopsShopIdNoticesNoticeId> {
  try {
    const res = await instance.get(`/shops/${shop_id}/notices/${notice_id}`);
    return res.data;
  } catch (error) {
    console.error("getShopNoticeDetail 함수에서 오류 발생:", error);
    throw error;
  }
}

export async function GET<T>(endpoint: string, params?: object): Promise<T> {
  try {
    const res: AxiosResponse<T> = await axiosInstance.get<T>(endpoint, {
      params,
    });
    return res.data;
  } catch (error) {
    if (error instanceof AxiosError) {
      // AxiosError의 경우, 상세 정보 로깅
      console.error(
        `GET 요청 에러 - URL: ${endpoint}, 메시지: ${error.message}`,
      );
      if (error.response) {
        // 서버 응답이 있는 경우
        console.error(
          `응답 상태: ${error.response.status}, 데이터: ${JSON.stringify(error.response.data)}`,
        );
      } else if (error.request) {
        // 요청은 이루어졌으나 응답을 받지 못한 경우
        console.error(`요청 실패: ${error.request}`);
      } else {
        // 요청 설정 중 발생한 에러
        console.error(`요청 설정 에러: ${error.message}`);
      }
    } else {
      // AxiosError가 아닌 기타 에러
      console.error(`알 수 없는 에러: ${error}`);
    }
    throw error;
  }
}

export function getUserInfo(user_id: string) {
  return GET<GetUsersUserId>(`/users/${user_id}`);
}

export function getShopInfo(shop_id: string) {
  return GET<GetShopsShopId>(`/shops/${shop_id}`);
}
//가게 등록하기
export const postShopCreate = async ({
  name,
  category,
  address1,
  address2,
  description = "사장님이 가게 설명을 입력하지 않았습니다.",
  imageUrl,
  originalHourlyPay,
}: {
  name: string;
  category: CategoryType;
  address1: AddressType;
  address2: string;
  description?: string;
  imageUrl: File;
  originalHourlyPay: number;
}): Promise<boolean> => {
  try {
    const processedImageUrl = await getImageUrl(imageUrl);
    const response = await axiosInstance.post<UserProfileData>(
      "/shops",
      {
        name,
        category,
        address1,
        address2,
        description,
        imageUrl: processedImageUrl,
        originalHourlyPay,
      },
      {
        authorization: true,
      },
    );
    return response.status === 200;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 409 || error.response?.status === 401) {
        throw new Error(error.response.data.message);
      }
    }
    console.log(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};
