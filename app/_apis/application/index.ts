import instance from "@/app/_lib/axios";
import {
  GetShopsShopIdNoticesNoticeIdApplications,
  GetUsersUserIdApplications,
  PostShopsShopIdNoticesNoticeIdApplications,
  PutShopsShopIdNoticesNoticeIdApplicationsApplicationId,
} from "../type";
import axiosInstance from "../instances";
import { isAxiosError } from "axios";

// 1. 가게의 특정 공고의 지원 목록 조회
export async function getNoticeApplications(
  shop_id: string,
  notice_id: string,
  offset = 0,
  limit = 10,
): Promise<GetShopsShopIdNoticesNoticeIdApplications> {
  try {
    const params = new URLSearchParams({
      offset: offset.toString(),
      limit: limit.toString(),
    });

    const res = await instance.get<GetShopsShopIdNoticesNoticeIdApplications>(
      `/shops/${shop_id}/notices/${notice_id}/applications`,
      { params },
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

// 유저의 지원 목록 조회
export async function getUserNoticeApplication(
  user_id: string,
  offset = 0,
  limit = 10,
): Promise<GetUsersUserIdApplications> {
  try {
    const params = new URLSearchParams({
      offset: offset.toString(),
      limit: limit.toString(),
    });

    const res = await instance.get<GetUsersUserIdApplications>(
      `/users/${user_id}/applications`,
      { params },
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
