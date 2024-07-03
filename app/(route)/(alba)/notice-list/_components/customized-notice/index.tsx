"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NoticeCard from "@/app/_components/notice-card";
import { GetNotices } from "../../../../../_apis/type/index";

type CustomizedNoticeListProps = {
  notices: GetNotices;
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
          slidesPerView={"auto"}
          slidesOffsetAfter={30}
        >
          {noticeList &&
            noticeList.map((cardContents) => {
              return (
                <SwiperSlide
                  key={cardContents.item.id}
                  className="noticeCard overflow-visible px-1 py-4 md:px-2"
                >
                  <NoticeCard cardContents={cardContents.item} />
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
