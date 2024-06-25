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

type AnnounceCardProps = {
  notices: NoticesData[];
};

export default function AllAnnounceCard({ notices }: AnnounceCardProps) {
  return (
    <>
      <div className="lg :grid-cols-3 grid grid-cols-2 gap-4">
        {notices &&
          notices.map((notice) => {
            const hourlyWage = calculateWagePercentage(notice.item.hourlyPay);
            const date = dateFormat(notice.item.startsAt);
            return (
              <motion.div
                key={notice.item.id}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="cursor-pointer"
              >
                <div
                  key={notice.item.id}
                  className="h-[261px] w-[171px] rounded-[12px] border border-gray-20 bg-white p-3 md:h-[349px] md:w-[312px]"
                >
                  <div className="relative mb-2 h-[82px] w-[147px] rounded-[12px] md:h-[160px] md:w-[280px]">
                    <Image
                      alt=""
                      src={notice.item.shop.item.imageUrl}
                      fill={true}
                      layout="fill"
                      objectFit="cover"
                      className="rounded-[12px]"
                    />
                  </div>
                  <data className="font-bold md:text-l">
                    {notice.item.shop.item.name}
                  </data>
                  <div className="flex items-start gap-1">
                    <Image src={clock} alt="시간" width={20} height={20} />
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
                    <Image src={mapPin} alt="장소" width={20} height={20} />
                    <data className="py-2 text-s text-gray-50 md:text-m">
                      {notice.item.shop.item.address1}
                    </data>
                  </div>
                  <div className="flex flex-col md:flex-row md:gap-4 md:py-4">
                    <data className="pt-1 font-bold text-ml md:text-xl">
                      {formattedNumber(notice.item.hourlyPay)}
                    </data>
                    <div className="flex items-center text-s text-primary">
                      <LabelHourlyRate percent={hourlyWage} />
                    </div>
                  </div>
                </div>
              </motion.div>
            );
          })}
      </div>
    </>
  );
}
