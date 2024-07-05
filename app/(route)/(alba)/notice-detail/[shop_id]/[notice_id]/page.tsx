import React, { Suspense } from "react";
import { getShopNoticeDetail } from "@/app/_apis/shop";
import NoticeDetailCard from "@/app/_components/notice-detail-card";
import { getNotices } from "@/app/_util/notice";
import RecentNotices from "../../_components/recent-notices";
import { NoticeCardSkeleton } from "@/app/_components/notice-card/_component/skeleton";
import NoticeDetailCardSkeleton from "@/app/_components/notice-detail-card/_component/notice-detail-card-skeleton";

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
      <Suspense fallback={<NoticeDetailCardSkeleton />}>
        <NoticeDetailCard shopId={params.shop_id} noticeId={params.notice_id} />
      </Suspense>
      <div className="my-12">
        <h2 className="py-8 font-bold text-l md:text-2xl">최근에 본 공고</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          <Suspense
            fallback={[1, 2, 3, 4, 5, 6].map((value) => (
              <NoticeCardSkeleton key={value} />
            ))}
          >
            <RecentNotices />
          </Suspense>
        </div>
      </div>
    </div>
  );
}
