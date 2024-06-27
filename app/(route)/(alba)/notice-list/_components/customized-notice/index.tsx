"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NoticeCard from "@/app/_components/notice-card";
import { NoticeResponse } from "../../../../../_apis/notice/response-type";

type CustomizedNoticeListProps = {
  notices: NoticeResponse;
};

export default function CustomizedNoticeList({
  notices,
}: CustomizedNoticeListProps) {
  const noticeList = notices.items;
  return (
    <>
      <div className="flex">
        <Swiper
          pagination={{
            clickable: true,
          }}
          spaceBetween={14}
        >
          {noticeList &&
            noticeList.map((cardContents) => {
              return (
                <SwiperSlide
                  key={cardContents.item.id}
                  className="swiper-slide overflow-visible pb-4 pt-4"
                >
                  <NoticeCard cardContents={cardContents} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
