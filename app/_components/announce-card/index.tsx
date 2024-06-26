"use client";
import React from "react";
import { calculateWagePercentage } from "@/app/_util/calculate-wage-percentage ";
import { dateFormat } from "@/app/_util/date-format";

import "swiper/css";
import { NoticesResponse } from "@/app/_types/response-type";
import NoticeCard from "../notice-card.tsx";

type AnnounceCardProps = {
  notices: NoticesResponse;
};

export default function AnnounceCard({ notices }: AnnounceCardProps) {
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
