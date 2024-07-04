import React, { Suspense } from "react";
import NoticeDetailCard from "@/app/_components/notice-detail-card";
import AlbaApplicationTable from "../_components/alba-application-table";
import { getNoticeApplications } from "@/app/_apis/application";
import NoticeDetailCardSkeleton from "@/app/_components/notice-detail-card/_component/notice-detail-card-skeleton";

export const metadata = {
  title: "공고 상세",
};

type PageProps = {
  searchParams: {
    page?: string;
  };
};

export default async function page(
  { searchParams }: PageProps,
  { params }: { params: { shop_id: string; notice_id: string } },
) {
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 10;
  const offset = (page - 1) * limit;

  const noticeDetail = await getShopNoticeDetail(
    params.shop_id,
    params.notice_id,
  );

  const applicationList = await getNoticeApplications(
    params.shop_id,
    params.notice_id,
    offset,
    limit,
  );

  return (
    <div className="base-container">
      <Suspense fallback={<NoticeDetailCardSkeleton />}>
        <NoticeDetailCard shopId={shopId} noticeId={noticeId} />
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
