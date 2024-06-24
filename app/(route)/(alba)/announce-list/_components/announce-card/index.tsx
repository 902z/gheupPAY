import Image from "next/image";
import React from "react";
import clock from "@/public/icons/clock.png";
import mapPin from "@/public/icons/map-pin.png";
import LabelHourlyRate from "@/app/_components/label-hourly-rate";
import { calculateWagePercentage } from "@/app/_util/calculate-wage-percentage ";

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

export default function AnnounceCard({ notices }: AnnounceCardProps) {
  return (
    <>
      {notices &&
        notices.map((notice) => {
          const hourlyWage = calculateWagePercentage(notice.item.hourlyPay);
          return (
            <div
              key={notice.item.id}
              className="h-[261px] w-[171px] rounded-[12px] border border-gray-20 bg-white p-3 md:h-[349px] md:w-[313px]"
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
              <data className="font-bold md:text-l">{notice.item.shop.item.name}</data>
              <div className="flex items-start gap-1">
                <Image src={clock} alt="시간" width={20} height={20} />
                <time className="text-s text-gray-50 md:text-m">
                  {new Date(notice.item.startsAt).toLocaleDateString("ko-KR", {
                    year: "numeric",
                    month: "2-digit",
                    day: "2-digit",
                  })}
                  2023-01-02 <br className="md:hidden" /> 15:00~18:00 (3시간)
                </time>
              </div>
              <div className="flex items-center gap-1">
                <Image src={mapPin} alt="장소" width={20} height={20} />
                <data className="py-2 text-s text-gray-50 md:text-m">{notice.item.shop.item.address1}</data>
              </div>
              <div className="flex flex-col md:flex-row md:gap-4 md:py-4">
                <data className="pt-1 font-bold text-ml md:text-xl">{notice.item.hourlyPay}</data>
                <div className="flex items-center text-s text-primary">
                  <LabelHourlyRate percent={hourlyWage} />
                </div>
              </div>
            </div>
          );
        })}
    </>
  );
}
