"use client";
import React from "react";

import "swiper/css";
import { NoticesResponse } from "@/app/_types/response-type";
import NoticeCard from "../notice-card.tsx";

type AnnounceListProps = {
  notices: NoticesResponse;
};

export default function AnnounceList({ notices }: AnnounceListProps) {
  const noticeList = notices.items;
  return (
    <>
      {noticeList &&
        noticeList.map((cardContents) => {
          return <NoticeCard cardContents={cardContents} />;
        })}
    </>
  );
}
