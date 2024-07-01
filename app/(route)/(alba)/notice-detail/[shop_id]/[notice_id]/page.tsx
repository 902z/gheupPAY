import React, { Suspense } from "react";
import { getShopNoticeDetail } from "@/app/_apis/shop";
import NoticeDetailCard from "@/app/_components/notice-detail-card";
import { getNotices } from "@/app/_util/notice";
import RecentNotices from "../../_components/recent-notices";

export const metadata = {
  title: "공고 상세",
};

export default async function page({
  params,
}: {
  params: { shop_id: string; notice_id: string };
}) {
  return (
    <div className="base-container">
      <Suspense fallback={<div>Loading...</div>}>
        <NoticeDetailCard shopId={params.shop_id} noticeId={params.notice_id} />
      </Suspense>
      <div className="my-12">
        <h2 className="py-8 font-bold text-l md:text-2xl">최근에 본 공고</h2>
        <RecentNotices />
      </div>
    </div>
  );
}
