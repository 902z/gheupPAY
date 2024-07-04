import instance from "@/app/_lib/axios";
import { AddressType } from "@/app/_constants/address";
import { CategoryType } from "@/app/_constants/category";
import { isAxiosError } from "axios";
import { API_ERROR_MESSAGE } from "@/app/_constants/error-message";
import { getImageUrl } from "../image";
import { GetShopsShopIdNoticesNoticeId, PostShop } from "../type";

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
    const response = await instance.post<PostShop>(
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
