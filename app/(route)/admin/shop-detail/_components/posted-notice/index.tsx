"use client";
import { redirectAction } from "@/app/_actions";
import { getShopNoticeList } from "@/app/_apis/notice";
import { GetShopsShopIdNotices, GetUsersUserId } from "@/app/_apis/type";
import { RedirectButton } from "@/app/_components/action-button";
import { IntersectionArea } from "@/app/_components/interception-area";
import NoticeCard from "@/app/_components/notice-card";
import { isAxiosError } from "axios";
import { useCallback, useState } from "react";

interface PostedNoticeProp {
  shop: GetUsersUserId["item"]["shop"];
  initialList: GetShopsShopIdNotices;
}
interface InfiniteScrollProps {
  hasNext: boolean;
  offset: number;
}

export default function PostedNotice({ shop, initialList }: PostedNoticeProp) {
  const [noticeConfig, setNoticeConfig] = useState<InfiniteScrollProps>({
    hasNext: initialList.hasNext,
    offset: initialList.offset + 6,
  });

  const [notices, setNotices] = useState<GetShopsShopIdNotices["items"]>(
    initialList.items,
  );

  if (!shop) return;

  const handleImpression = useCallback(async () => {
    if (!noticeConfig.hasNext) return;
    try {
      const { items, hasNext } = await getShopNoticeList({
        shop_id: shop.item.id,
        offset: noticeConfig.offset,
      });
      setNoticeConfig((prev) => ({
        hasNext,
        offset: prev.offset + 6,
      }));
      setNotices((prev) => [...prev, ...items]);
    } catch (e) {
      if (isAxiosError(e)) {
        console.error(e.message);
      } else {
        console.error(e);
        throw Error("알림을 불러오는데 오류가 발생했습니다.");
      }
    }
  }, [noticeConfig]);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {notices &&
          notices.map((notice, index) => {
            if (notices.length === index + 1) {
              return (
                <IntersectionArea
                  key={notice.item.id}
                  onImpression={handleImpression}
                >
                  <RedirectButton
                    noticeId={notice.item.id}
                    shopId={shop.item.id}
                  >
                    <NoticeCard
                      noticeId={notice.item.id}
                      address1={shop.item.address1}
                      closed={notice.item.closed}
                      hourlyPay={notice.item.hourlyPay}
                      imageUrl={shop.item.imageUrl}
                      name={shop.item.name}
                      startsAt={notice.item.startsAt}
                      workhour={notice.item.workhour}
                      key={notice.item.id}
                    />
                  </RedirectButton>
                </IntersectionArea>
              );
            }
            return (
              <RedirectButton
                shopId={shop.item.id}
                noticeId={notice.item.id}
                key={notice.item.id}
              >
                <NoticeCard
                  noticeId={notice.item.id}
                  address1={shop.item.address1}
                  closed={notice.item.closed}
                  hourlyPay={notice.item.hourlyPay}
                  imageUrl={shop.item.imageUrl}
                  name={shop.item.name}
                  startsAt={notice.item.startsAt}
                  workhour={notice.item.workhour}
                />
              </RedirectButton>
            );
          })}
      </div>
    </>
  );
}
