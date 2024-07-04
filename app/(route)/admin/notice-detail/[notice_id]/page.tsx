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

export default async function page({ searchParams }: PageProps) {
  const shopId = "ea7af667-2069-4e00-a594-cd69b9b9708c";
  const noticeId = "18f52927-8420-4113-badb-673b9b0caac8";

  const page = parseInt(searchParams.page || "1", 10);
  const limit = 10;
  const offset = (page - 1) * limit;

  const applicationList = await getNoticeApplications(
    shopId,
    noticeId,
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
