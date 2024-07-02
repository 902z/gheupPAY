import React from "react";
import { getShopNoticeDetail } from "@/app/_apis/shop";
import NoticeDetailCard from "@/app/_components/notice-detail-card";
import RecentNotices from "../../_components/recent-notices";
import Header from "@/app/_components/header";
import Footer from "@/app/_components/footer";

export const metadata = {
  title: "공고 상세",
};

export default async function page({
  params,
}: {
  params: { shop_id: string; notice_id: string };
}) {
  const noticeDetail = await getShopNoticeDetail(
    params.shop_id,
    params.notice_id,
  );

  return (
    <>
      <Header />
      <div className="base-container">
        <NoticeDetailCard noticeDetail={noticeDetail} />

        <div className="my-12">
          <h2 className="py-8 font-bold text-l md:text-2xl">최근에 본 공고</h2>
          <RecentNotices />
        </div>
      </div>
      <Footer />
    </>
  );
}
