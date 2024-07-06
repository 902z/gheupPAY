"use client";
import React from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import NoticeCard from "@/app/_components/notice-card";
import { GetNotices } from "../../../../../_apis/type/index";
import { NoticeDetailedButton } from "@/app/_components/action-button";

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
                  <NoticeDetailedButton
                    noticeId={cardContents.item.id}
                    shopId={cardContents.item.shop.item.id}
                  >
                    <NoticeCard
                      address1={cardContents.item.shop.item.address1}
                      closed={cardContents.item.closed}
                      hourlyPay={cardContents.item.hourlyPay}
                      noticeId={cardContents.item.id}
                      imageUrl={cardContents.item.shop.item.imageUrl}
                      name={cardContents.item.shop.item.name}
                      startsAt={cardContents.item.startsAt}
                      workhour={cardContents.item.workhour}
                    />
                  </NoticeDetailedButton>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
