import instance from "@/app/_lib/axios";
import {
  GetShopsShopIdNoticesNoticeIdApplications,
  GetUsersUserIdApplications,
  PutShopsShopIdNoticesNoticeIdApplicationsApplicationId,
} from "../type";

// 1. 가게의 특정 공고의 지원 목록 조회
export async function getNoticeApplications(
  shop_id: string,
  notice_id: string,
  offset = 0,
  limit = 10,
): Promise<GetShopsShopIdNoticesNoticeIdApplications> {
  try {
    const res = await instance.get<GetShopsShopIdNoticesNoticeIdApplications>(
      `/shops/${shop_id}/notices/${notice_id}/applications?offset=${offset}&limit=${limit}`,
    );
    return res.data;
  } catch (error) {
    console.error("getNoticeApplications 함수에서 오류 발생:", error);
    throw error;
  }
}

// 유저의 지원 목록 조회
export async function getUserNoticeApplication(
  user_id: string,
  offset = 0,
  limit = 10,
): Promise<GetUsersUserIdApplications> {
  try {
    const res = await instance.get<GetUsersUserIdApplications>(
      `/users/${user_id}/applications?offset=${offset}&limit=${limit}`,
    );
    return res.data;
  } catch (error) {
    console.error("getUserNoticeApplication 함수에서 오류 발생:", error);
    throw error;
  }
}

// 가게의 특정 공고 지원 승인, 거절 또는 취소
export async function putNoticeApplicationStatus(
  shop_id: string,
  notice_id: string,
  application_id: string,
  status: "pending" | "accepted" | "rejected" | "canceled",
): Promise<PutShopsShopIdNoticesNoticeIdApplicationsApplicationId> {
  try {
    const res =
      await instance.put<PutShopsShopIdNoticesNoticeIdApplicationsApplicationId>(
        `/shops/${shop_id}/notices/${notice_id}/applications/${application_id}`,
        { status },
      );
    return res.data;
  } catch (error) {
    console.error("putNoticeApplicationStatus 함수에서 오류 발생:", error);
    throw error;
  }
}
