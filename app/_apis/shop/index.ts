import instance from "@/app/_lib/axios";
import {
  GetShopsShopId,
  GetShopsShopIdNoticesNoticeId,
  PostShops,
  PutShopsShopId,
} from "../type";
import { AddressType } from "@/app/_constants/address";
import { CategoryType } from "@/app/_constants/category";
import axiosInstance from "../instances";
import { isAxiosError } from "axios";
import { API_ERROR_MESSAGE } from "@/app/_constants/error-message";
import { getImageUrl } from "../image";

// 가게 정보 조회
export async function getShopDetail(shopId: string): Promise<GetShopsShopId> {
  try {
    const res = await axiosInstance.get(`/shops/${shopId}`);
    return res.data;
  } catch (error) {
    console.error("getShopDetail 함수에서 오류 발생:", error);
    throw error;
  }
}

// 4. 가게의 특정 공고 조회
export async function getShopNoticeDetail(
  shopId: string,
  noticeId: string,
): Promise<GetShopsShopIdNoticesNoticeId> {
  try {
    const res = await instance.get(`/shops/${shopId}/notices/${noticeId}`);
    return res.data;
  } catch (error) {
    console.error("getShopNoticeDetail 함수에서 오류 발생:", error);
    throw error;
  }
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
    const response = await axiosInstance.post<PostShops>(
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

//가게 정보 수정
export const putEditShop = async ({
  name,
  category,
  address1,
  address2,
  description = "사장님이 가게 설명을 입력하지 않았습니다.",
  imageUrl,
  originalHourlyPay,
  shopId,
}: {
  name: string;
  category: CategoryType;
  address1: AddressType;
  address2: string;
  description?: string;
  imageUrl: File | string;
  originalHourlyPay: number;
  shopId: string;
}): Promise<boolean> => {
  try {
    let processedImageUrl: string;
    if (imageUrl instanceof File) {
      processedImageUrl = await getImageUrl(imageUrl);
    } else {
      processedImageUrl = imageUrl;
    }
    const response = await axiosInstance.put<PutShopsShopId>(
      `/shops/${shopId}`,
      {
        name,
        category,
        address1,
        address2,
        description,
        imageUrl: processedImageUrl,
        originalHourlyPay,
      },
    );
    return response.status === 200;
  } catch (error) {
    if (isAxiosError(error)) {
      if (
        error.response?.status === 404 ||
        error.response?.status === 403 ||
        error.response?.status === 401
      ) {
        throw new Error(error.response.data.message);
      }
    }
    console.log(error);
    throw new Error(API_ERROR_MESSAGE);
  }
};
