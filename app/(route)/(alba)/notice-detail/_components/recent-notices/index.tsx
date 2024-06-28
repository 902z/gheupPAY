"use client";
import { getShopNoticeDetail } from "@/app/_apis/shop";
import { NoticeCardContents } from "@/app/_apis/type";
import NoticeCard from "@/app/_components/notice-card";
import React, { useEffect, useState } from "react";

type noticesDetail = { item: { id: string; shop: { item: { id: string } } } };

export default function RecentNotices() {
  const [recentNotices, setRecentNotices] = useState<NoticeCardContents[]>([]);

  useEffect(() => {
    const fetchNotices = async () => {
      const noticesData = localStorage.getItem("user-store");

      if (noticesData) {
        const recentNoticesData = JSON.parse(noticesData);
        const recentNoticesArray = recentNoticesData.state.noticesData;

        const noticesDetails = await Promise.all(
          recentNoticesArray.map(async (notice: noticesDetail) => {
            const noticeId = notice.item.id;
            const shopId = notice.item.shop.item.id;
            return await getShopNoticeDetail(shopId, noticeId);
          }),
        );
        setRecentNotices(noticesDetails);
      }
    };

    fetchNotices();
  }, []);

  return (
    <div className="lg grid grid-cols-2 gap-4 lg:grid-cols-3">
      {recentNotices &&
        recentNotices.map((recentNotice: NoticeCardContents, index: number) => (
          <NoticeCard cardContents={recentNotice} key={index} />
        ))}
    </div>
  );
}
