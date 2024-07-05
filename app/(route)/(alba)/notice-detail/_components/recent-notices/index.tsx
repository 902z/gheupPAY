import { getShopNoticeDetail } from "@/app/_apis/shop";
import NoticeCard from "@/app/_components/notice-card";
import { NoticeCardSkeleton } from "@/app/_components/notice-card/_component/skeleton";
import { getNotices, NoticeIds } from "@/app/_util/notice";
import postNoticeAction from "@/app/actions/post-notice-action";
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
          const cardContents = await fetchNotices(notice);
          return (
            <Suspense fallback={<NoticeCardSkeleton key={index} />}>
              <NoticeCard
                address1={cardContents.shop.item.address1}
                closed={cardContents.closed}
                shopId={cardContents.shop.item.id}
                hourlyPay={cardContents.hourlyPay}
                noticeId={cardContents.id}
                imageUrl={cardContents.shop.item.imageUrl}
                name={cardContents.shop.item.name}
                startsAt={cardContents.startsAt}
                workhour={cardContents.workhour}
                key={cardContents.id}
              />
            </Suspense>
          );
        })}
    </>
  );
}
