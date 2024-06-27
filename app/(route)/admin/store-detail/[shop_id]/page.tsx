import React from "react";
import MyShopDetailCard from "../_components/my-store-detail-card";
import { getShopDetail } from "@/app/_apis/store/api";

export const metadata = {
  title: "내 가게 상세",
};

export default async function page() {
  const shopId = "4490151c-5217-4157-b072-9c37b05bed47";
  const shopDetail = await getShopDetail(shopId);

  return (
    <div className="base-container">
      <h2 className="pb-4 font-bold text-l md:text-2xl">내 가게</h2>
      <MyShopDetailCard shopDetail={shopDetail} />

      <h2 className="pb-4 font-bold text-l md:text-2xl">등록한 공고</h2>
    </div>
  );
}
