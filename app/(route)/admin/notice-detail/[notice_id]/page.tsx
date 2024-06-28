import React from "react";
import NoticeDetailCard from "../_components/notice-detail-card";
import { getShopNoticeDetail } from "@/app/_apis/shop";
export const metadata = {
  title: "공고 상세",
};
export default async function page() {
  const shopId = "4490151c-5217-4157-b072-9c37b05bed47";
  const noticeId = "99996477-82db-4bda-aae1-4044f11d9a8b";

  const noticeDetail = await getShopNoticeDetail(shopId, noticeId);

  return (
    <div className="base-container">
      <NoticeDetailCard noticeDetail={noticeDetail} />

      <h2 className="py-8 font-bold text-l md:text-2xl">신청자 목록</h2>
      {/* <NoneNotice /> */}
    </div>
  );
}