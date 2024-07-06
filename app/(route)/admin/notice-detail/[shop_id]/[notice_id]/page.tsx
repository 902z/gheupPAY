import React, { Suspense } from "react";
import NoticeDetailCard from "@/app/_components/notice-detail-card";
import AlbaApplicationTable from "../../_components/alba-application-table";
import { getNoticeApplications } from "@/app/_apis/application";
import NoticeDetailCardSkeleton from "@/app/_components/notice-detail-card/_component/notice-detail-card-skeleton";
import { getCookie } from "@/app/_util/cookie";
import { getUser } from "@/app/_apis/user";

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

  const userId = await getCookie("userId");
  const type = await getCookie("type");

  const userDetail = typeof userId === "string" ? await getUser(userId) : null;
  if (!userDetail || !userDetail.item || !userDetail.item.shop) {
    return null;
  }
  const isOwner =
    type === "employer" && params.shop_id === userDetail.item.shop.item.id;

  return (
    <div className="base-container">
      <Suspense fallback={<NoticeDetailCardSkeleton />}>
        <NoticeDetailCard shopId={params.shop_id} noticeId={params.notice_id} />
      </Suspense>
      <div className="my-12">
        <h2 className="py-8 font-bold text-l md:text-2xl">신청자 목록</h2>
        {isOwner ? (
          <AlbaApplicationTable
            applicationList={applicationList}
            activePage={page}
            itemsCountPerPage={limit}
          />
        ) : (
          <div className="flex flex-col items-center justify-center rounded-xl border border-gray-20 px-10 py-10 md:px-60">
            <p>다른 사장님 공고의 신청자 목록은 못봐요!</p>
          </div>
        )}
      </div>
    </div>
  );
}
