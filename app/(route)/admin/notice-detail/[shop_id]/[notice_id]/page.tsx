import React, { Suspense } from "react";
import NoticeDetailCard from "@/app/_components/notice-detail-card";
import AlbaApplicationTable from "../../_components/alba-application-table";
import { getNoticeApplications } from "@/app/_apis/application";
import NoticeDetailCardSkeleton from "@/app/_components/notice-detail-card/_component/notice-detail-card-skeleton";

export const metadata = {
  title: "공고 상세",
};

type PageProps = {
  searchParams: {
    page?: string;
  };
  params?: {
    shop_id: string;
    notice_id: string;
  };
};

export default async function page({ searchParams, params }: PageProps) {
  const page = parseInt(searchParams.page || "1", 5);
  const limit = 5;
  const offset = (page - 1) * limit;

  if (!params || !params.shop_id || !params.notice_id) return;

  const applicationList = await getNoticeApplications(
    params.shop_id,
    params.notice_id,
    offset,
    limit,
  );

  return (
    <div className="base-container">
      <Suspense fallback={<NoticeDetailCardSkeleton />}>
        <NoticeDetailCard shopId={params.shop_id} noticeId={params.notice_id} />
      </Suspense>
      <div className="my-12">
        <h2 className="py-8 font-bold text-l md:text-2xl">신청자 목록</h2>
        <AlbaApplicationTable
          applicationList={applicationList}
          activePage={page}
          itemsCountPerPage={limit}
        />
      </div>
    </div>
  );
}
