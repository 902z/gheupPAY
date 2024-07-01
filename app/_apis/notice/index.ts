import instance from "@/app/_lib/axios";
import axiosInstance from "../instances";
import { CreateNoticeRequest } from "../type";

// 맞춤 공고
export async function getCustomizedNotices({
  offset = 0,
  limit = 5,
  // startsAtGte = ""
}) {
  try {
    const params = new URLSearchParams({
      offset: offset.toString(),
      limit: limit.toString(),
      // startsAtGte,
    });

    const res = await instance.get(`/notices?${params.toString()}`);
    return res.data;
  } catch (error) {
    console.error("getNotices 함수에서 오류 발생:", error);
    throw error;
  }
}

// 전체 공고
export async function getAllNotices({
  offset = 0,
  limit = 12,
  keyword = "",
  hourlyPayGte = 0,
  sort = "time",
}) {
  try {
    const params = new URLSearchParams({
      offset: offset.toString(),
      limit: limit.toString(),
      keyword,
      hourlyPayGte: hourlyPayGte.toString(),
      sort,
    });

    const res = await instance.get(`/notices?${params.toString()}`);
    return res.data;
  } catch (error) {
    console.error("getAllNotices 함수에서 오류 발생:", error);
    throw error;
  }
}

export async function postCreateNotice(
  shopId: string,
  params: CreateNoticeRequest,
) {
  try {
    const res = await axiosInstance.post(`/shops/${shopId}/notices`, params);
    return res.data;
  } catch (error) {
    console.error("PostCreateNotice 함수에서 오류 발생:", error);
    throw error;
  }
}
