"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NoticeCard from "@/app/_components/notice-card.tsx";
import { NoticesResponse } from "@/app/_types/response-type";

type AnnounceListProps = {
  notices: NoticesResponse;
};

export default function CustomizedAnnounceList({ notices }: AnnounceListProps) {
  const noticeList = notices.items;
  return (
    <>
      <div className="flex">
        <Swiper
          slidesOffsetAfter={300}
          pagination={{
            clickable: true,
          }}
          breakpoints={{
            375: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
            767: {
              slidesPerView: 2,
              spaceBetween: 50,
            },
            1024: {
              slidesPerView: 4,
              spaceBetween: 300,
            },
          }}
        >
          {noticeList &&
            noticeList.map((cardContents) => {
              return (
                <SwiperSlide
                  key={cardContents.item.id}
                  className="overflow-visible py-4"
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