import { getShopNoticeDetail } from "@/app/_apis/shop";
import {
  NoticeDetailedButton,
  PostNoticesButton,
} from "@/app/_components/action-button";
import NoticeCard from "@/app/_components/notice-card";
import { getNotices, NoticeIds } from "@/app/_util/notice";

const fetchNotices = async ({ id, shopId }: NoticeIds) => {
  return (await getShopNoticeDetail(shopId, id)).item;
};

interface ReCentNoticesProps {
  shopId: string;
  noticeId: string;
}

export default async function RecentNotices({
  shopId,
  noticeId,
}: ReCentNoticesProps) {
  const notices = await getNotices();
  return (
    <>
      <PostNoticesButton shopId={shopId} noticeId={noticeId} />
      {notices &&
        notices.length > 1 &&
        notices.slice(1).map(async (notice) => {
          const cardContents = await fetchNotices(notice);
          return (
            <NoticeDetailedButton
              noticeId={cardContents.id}
              shopId={cardContents.shop.item.id}
              key={cardContents.id}
            >
              <NoticeCard
                address1={cardContents.shop.item.address1}
                closed={cardContents.closed}
                hourlyPay={cardContents.hourlyPay}
                noticeId={cardContents.id}
                imageUrl={cardContents.shop.item.imageUrl}
                name={cardContents.shop.item.name}
                startsAt={cardContents.startsAt}
                workhour={cardContents.workhour}
              />
            </NoticeDetailedButton>
          );
        })}
    </>
  );
}
