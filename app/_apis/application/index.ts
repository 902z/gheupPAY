import instance from "@/app/_lib/axios";
import {
  GetShopsShopIdNoticesNoticeIdApplications,
  PostShopsShopIdNoticesNoticeIdApplications,
} from "../type";
import { PutShopsShopIdNoticesNoticeIdApplicationsApplicationId } from "../type/index";
import axiosInstance from "../instances";
import { isAxiosError } from "axios";

// 1. 가게의 특정 공고의 지원 목록 조회
export async function getNoticeApplications(
  shop_id: string,
  notice_id: string,
): Promise<GetShopsShopIdNoticesNoticeIdApplications> {
  try {
    const res = await instance.get<GetShopsShopIdNoticesNoticeIdApplications>(
      `/shops/${shop_id}/notices/${notice_id}/applications`,
    );
    return res.data;
  } catch (error) {
    console.error("getNoticeApplications 함수에서 오류 발생:", error);
    throw error;
  }
}

// 2. 가게의 특정 공고 지원 등록
export async function postShopsShopIdNoticesNoticeIdApplications(
  shop_id: string,
  notice_id: string,
) {
  try {
    const res =
      await axiosInstance.post<PostShopsShopIdNoticesNoticeIdApplications>(
        `/shops/${shop_id}/notices/${notice_id}/applications`,
      );
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
      throw error;
    } else {
      console.error("서버 오류입니다.");
      throw error;
    }
  }
}

// 3. 가게의 특정 공고 지원 승인, 거절 또는 취소
export async function putShopsShopIdNoticesNoticeIdApplicationsApplicationId(
  shop_id: string,
  notice_id: string,
  application_id: string,
  status: "accepted" | "rejected" | "canceled",
): Promise<PutShopsShopIdNoticesNoticeIdApplicationsApplicationId> {
  try {
    const res =
      await axiosInstance.put<PutShopsShopIdNoticesNoticeIdApplicationsApplicationId>(
        `/shops/${shop_id}/notices/${notice_id}/applications/${application_id}`,
        { status },
      );
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
      throw error;
    } else {
      console.error("서버 오류입니다.");
      throw error;
    }
  }
}

// 4. 유저의 지원 목록 조회
export async function getUserNoticeApplication(user_id: string) {
  try {
    const res = await instance.get(`/users/${user_id}/applications`);
    return res.data;
  } catch (error) {
    console.error("getUserNoticeApplication 함수에서 오류 발생:", error);
    throw error;
  }
}
