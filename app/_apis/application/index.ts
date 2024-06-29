import instance from "@/app/_lib/axios";

// 1. 가게의 특정 공고의 지원 목록 조회
export async function getNoticeApplications(
  shop_id: string,
  notice_id: string,
) {
  try {
    const res = await instance.get(
      `/shops/${shop_id}/notices/${notice_id}/applications`,
    );
    return res.data;
  } catch (error) {
    console.error("getNoticeApplications 함수에서 오류 발생:", error);
    throw error;
  }
}
