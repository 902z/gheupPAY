import { getShopNoticeDetail } from "@/app/_apis/shop";
import NoticeCard from "@/app/_components/notice-card";
import { NoticeCardSkeleton } from "@/app/_components/notice-card/_component/skeleton";
import { getNotices, NoticeIds } from "@/app/_util/notice";
import { Suspense } from "react";

const fetchNotices = async ({ id, shopId }: NoticeIds) => {
  return (await getShopNoticeDetail(shopId, id)).item;
};

export default async function RecentNotices() {
  const notices = await getNotices();

  return (
    <>
      {notices &&
        notices.length > 1 &&
        notices.slice(1).map(async (notice, index: number) => {
          const newCardContents = await fetchNotices(notice);
          return (
            <Suspense fallback={<NoticeCardSkeleton key={index} />}>
              <NoticeCard cardContents={newCardContents} />
            </Suspense>
          );
        })}
    </>
  );
}
