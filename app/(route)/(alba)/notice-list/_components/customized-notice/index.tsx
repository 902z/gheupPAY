"use client";
import Image from "next/image";
import React from "react";
import clock from "@/public/icons/clock.png";
import mapPin from "@/public/icons/map-pin.png";
import LabelHourlyRate from "@/app/_components/label-hourly-rate";
import { calculateWagePercentage } from "@/app/_util/calculate-wage-percentage ";
import { dateFormat } from "@/app/_util/date-format";
import { calculateTimeRange } from "@/app/_util/calculate-time-range";
import formattedNumber from "@/app/_util/number-format";
import { motion } from "framer-motion";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

type NoticesData = {
  item: {
    id: number;
    hourlyPay: number;
    startsAt: string;
    workhour: number;
    description: string;
    closed: false;
    shop: {
      item: {
        id: string;
        name: string;
        category: string;
        address1: string;
        address2: string;
        description: string;
        imageUrl: string;
        originalHourlyPay: number;
      };
      href: string;
    };
  };
};

type NoticeCardProps = {
  notices: NoticesData[];
};

export default function CustomizedNotice({ notices }: NoticeCardProps) {
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
          {notices &&
            notices.map((notice) => {
              const hourlyWage = calculateWagePercentage(notice.item.hourlyPay);
              const date = dateFormat(notice.item.startsAt);
              return (
                <SwiperSlide
                  key={notice.item.id}
                  className="overflow-visible py-4"
                >
                  <motion.div
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                    className="cursor-pointer"
                  >
                    <div
                      key={notice.item.id}
                      className="h-[261px] w-[166px] rounded-[12px] border border-gray-20 bg-white p-2 md:h-[349px] md:w-[305px] md:p-3"
                    >
                      <div className="relative mb-2 h-[82px] w-full rounded-[12px] md:h-[160px] lg:w-[280px]">
                        <Image
                          alt=""
                          src={notice.item.shop.item.imageUrl}
                          fill={true}
                          layout="fill"
                          objectFit="cover"
                          className="rounded-[12px]"
                        />
                      </div>
                      <div className="px-1">
                        <data className="font-bold md:text-l">
                          {notice.item.shop.item.name}
                        </data>
                        <div className="flex items-start gap-1">
                          <Image
                            src={clock}
                            alt="시간"
                            width={20}
                            height={20}
                          />
                          <time className="text-s text-gray-50 md:text-m">
                            {date} <br className="md:hidden" />{" "}
                            {calculateTimeRange(
                              notice.item.startsAt,
                              notice.item.workhour,
                            )}{" "}
                            ({notice.item.workhour}시간)
                          </time>
                        </div>
                        <div className="flex items-center gap-1">
                          <Image
                            src={mapPin}
                            alt="장소"
                            width={20}
                            height={20}
                          />
                          <data className="py-2 text-s text-gray-50 md:text-m">
                            {notice.item.shop.item.address1}
                          </data>
                        </div>
                        <div className="flex flex-col md:flex-row md:gap-4 md:py-4">
                          <data className="pt-1 font-bold text-ml md:text-l">
                            {formattedNumber(notice.item.hourlyPay)}원
                          </data>
                          <div className="flex items-center text-s text-primary">
                            <LabelHourlyRate percent={hourlyWage} />
                          </div>
                        </div>
                      </div>
                    </div>
                  </motion.div>
                </SwiperSlide>
              );
            })}
        </Swiper>
      </div>
    </>
  );
}
