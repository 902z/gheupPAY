"use client";
import { getShopNoticeList } from "@/app/_apis/notice";
import { GetShopsShopIdNotices, GetUsersUserId } from "@/app/_apis/type";
import { IntersectionArea } from "@/app/_components/interception-area";
import NoticeCard from "@/app/_components/notice-card";
import { NoticeCardSkeleton } from "@/app/_components/notice-card/_component/skeleton";
import { isAxiosError } from "axios";
import { useEffect, useState } from "react";

interface PostedNoticeProp {
  shop: GetUsersUserId["item"]["shop"];
}
interface InfiniteScrollProps {
  hasNext: boolean;
  offset: number;
}

export default function PostedNotice({ shop }: PostedNoticeProp) {
  const [noticeConfig, setNoticeConfig] = useState<InfiniteScrollProps>({
    hasNext: true,
    offset: 0,
  });

  const [notices, setNotices] = useState<GetShopsShopIdNotices["items"]>([]);

  if (!shop) return;

  const initialFetch = async () => {
    try {
      const { items, hasNext } = await getShopNoticeList({
        shop_id: shop.item.id,
      });
      setNoticeConfig(() => ({
        hasNext,
        offset: 6,
      }));
      setNotices(() => items);
    } catch (e) {
      if (isAxiosError(e)) {
        console.error(e.message);
      } else {
        console.error(e);
        throw Error("알림을 불러오는데 오류가 발생했습니다.");
      }
    }
  };

  const handleImpression = async () => {
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
  };

  useEffect(() => {
    initialFetch();
  }, []);

  return (
    <>
      <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
        {notices
          ? notices.map((notice, index) => {
              if (notices.length === index + 1) {
                return (
                  <IntersectionArea
                    key={notice.item.id}
                    onImpression={handleImpression}
                  >
                    <NoticeCard
                      noticeId={notice.item.id}
                      address1={shop.item.address1}
                      closed={notice.item.closed}
                      shopId={shop.item.id}
                      hourlyPay={notice.item.hourlyPay}
                      imageUrl={shop.item.imageUrl}
                      name={shop.item.name}
                      startsAt={notice.item.startsAt}
                      workhour={notice.item.workhour}
                      key={notice.item.id}
                    />
                  </IntersectionArea>
                );
              }
              return (
                <NoticeCard
                  noticeId={notice.item.id}
                  address1={shop.item.address1}
                  closed={notice.item.closed}
                  shopId={shop.item.id}
                  hourlyPay={notice.item.hourlyPay}
                  imageUrl={shop.item.imageUrl}
                  name={shop.item.name}
                  startsAt={notice.item.startsAt}
                  workhour={notice.item.workhour}
                  key={notice.item.id}
                />
              );
            })
          : [1, 2, 3, 4, 5, 6].map((index) => (
              <NoticeCardSkeleton key={index} />
            ))}
      </div>
    </>
  );
}
