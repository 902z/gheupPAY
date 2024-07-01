import instance from "@/app/_lib/axios";
import { GetShopsShopIdNoticesNoticeIdApplications } from "../type";

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

// 유저의 지원 목록 조회
export async function getUserNoticeApplication(user_id: string) {
  try {
    const res = await instance.get(`/users/${user_id}/applications`);
    return res.data;
  } catch (error) {
    console.error("getUserNoticeApplication 함수에서 오류 발생:", error);
    throw error;
  }
}
