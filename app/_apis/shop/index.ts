import { AxiosError, AxiosResponse } from "axios";
import axiosInstance from "../instances";
import instance from "@/app/_lib/axios";
import { ShopInfo, UserInfo } from "../type";
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
export async function getShopNoticeDetail(shop_id: string, notice_id: string) {
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
  return GET<UserInfo>(`/users/${user_id}`);
}

export function getShopInfo<T>(shop_id: string) {
  return GET<ShopInfo>(`/shops/${shop_id}`);
}
