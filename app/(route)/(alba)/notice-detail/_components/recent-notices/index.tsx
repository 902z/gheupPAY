import { getShopNoticeDetail } from "@/app/_apis/shop";
import NoticeCard from "@/app/_components/notice-card";
import { NoticeCardSkeleton } from "@/app/_components/notice-card/skeleton";
import { getNotices, NoticeIds } from "@/app/_util/notice";
import { Suspense } from "react";

interface RecentNoticesProps {
  notices: NoticeIds[];
}

export default async function RecentNotices() {
  const notices = await getNotices();
  const fetchNotices = async ({ id, shopId }: NoticeIds) => {
    return (await getShopNoticeDetail(shopId, id)).item;
  };

  return (
    <div className="lg grid grid-cols-2 gap-4 lg:grid-cols-3">
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
    </div>
  );
}
