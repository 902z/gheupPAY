"use client";
import { getShopNoticeDetail } from "@/app/_apis/shop";
import { GetShopsShopIdNoticesNoticeId } from "@/app/_apis/type";
import NoticeCard from "@/app/_components/notice-card";
import useUserStore from "@/stores/create-store";
import { useEffect, useState } from "react";

export default function RecentNotices() {
  const noticesData = useUserStore((state) => state.noticesData);
  const [recentNotices, setRecentNotices] =
    useState<GetShopsShopIdNoticesNoticeId["item"][]>();

  useEffect(() => {
    const fetchNotices = async () => {
      // id를 잘 넣을 때까지 기다려야 해서 promise.all 사용 (안 쓰니까 오류남)
      // 한 번 맵핑할 때마다 공고id, 가게id 가져와 API 요청함
      const notices = await Promise.all(
        noticesData.slice(1).map(async (notice) => {
          console.log(notice);
          const noticeId = notice.id;
          const shopId = notice.shop.item.id;
          return (await getShopNoticeDetail(shopId, noticeId)).item;
        }),
      );
      setRecentNotices(notices);
    };
    fetchNotices();
  }, [noticesData]);

  return (
    <div className="lg grid grid-cols-2 gap-4 lg:grid-cols-3">
      {recentNotices &&
        recentNotices.map((recentNotice, index: number) => (
          <NoticeCard cardContents={recentNotice} key={index} />
        ))}
    </div>
  );
}
