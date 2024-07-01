import instance from "@/app/_lib/axios";
import { GetShopsShopId, GetShopsShopIdNoticesNoticeId } from "../type";

// 가게 정보 조회
export async function getShopDetail(shop_id: string): Promise<GetShopsShopId> {
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
