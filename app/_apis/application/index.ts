import instance from "@/app/_lib/axios";

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
