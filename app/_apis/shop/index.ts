import instance from "@/app/_lib/axios";

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
