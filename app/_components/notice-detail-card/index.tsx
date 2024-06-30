import { noticeDetail } from "@/app/_apis/type";
import { calculateTimeRange } from "@/app/_util/calculate-time-range";
import { calculateWagePercentage } from "@/app/_util/calculate-wage-percentage ";
import { dateFormat } from "@/app/_util/date-format";
import formattedNumber from "@/app/_util/number-format";
import Image from "next/image";
import React from "react";
import clock from "@/public/icons/clock.png";
import mapPin from "@/public/icons/map-pin.png";
import Button from "@/app/_components/button";
import OnlyLabelHourlyRate from "../only-label-hourly-rate";

export default function NoticeDetailCard({ noticeDetail }: noticeDetail) {
  const hourlyWage = calculateWagePercentage(noticeDetail.item.hourlyPay);
  const date = dateFormat(noticeDetail.item.startsAt);

  return (
    <>
      <div>
        <h3 className="font-bold text-m text-primary">식당</h3>
        <data className="font-bold text-l">
          {noticeDetail.item.shop.item.name}
        </data>
      </div>
      <div className="box-border flex h-fit w-full flex-col rounded-[12px] border border-gray-10 bg-white p-5 lg:flex-row lg:gap-4">
        <div className="relative mb-2 box-border h-[180px] w-full rounded-[12px] md:h-[360px] lg:h-[308px] lg:w-[539px]">
          <Image
            alt=""
            src={noticeDetail.item.shop.item.imageUrl}
            fill={true}
            className="rounded-[12px] object-cover"
          />
        </div>
        <div className="relative flex-1 px-1 lg:flex lg:flex-col lg:items-stretch lg:py-3">
          <div className="lg:flex-1">
            <h3 className="font-bold text-m text-primary">식당</h3>
            <div className="flex gap-2 py-2">
              <data className="pt-1 font-bold text-ml md:text-l">
                {formattedNumber(noticeDetail.item.hourlyPay)}원
              </data>
              <OnlyLabelHourlyRate percent={hourlyWage} />
            </div>
            <div className="flex items-start gap-1">
              <Image src={clock} alt="시간" width={20} height={20} />
              <time className="text-s text-gray-50 md:text-m">
                {date}{" "}
                {calculateTimeRange(
                  noticeDetail.item.startsAt,
                  noticeDetail.item.workhour,
                )}{" "}
                ({noticeDetail.item.workhour}시간)
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Image src={mapPin} alt="장소" width={20} height={20} />
              <data className="py-2 text-s text-gray-50 md:text-m">
                {noticeDetail.item.shop.item.address1}
              </data>
            </div>
            <div className="break-words py-4 text-m">
              <p>{noticeDetail.item.shop.item.description}</p>
            </div>
          </div>
          <Button btnColor="orange" className="font-bold">
            신청하기
          </Button>
        </div>
      </div>
      <div className="mt-4 box-border flex h-fit w-full flex-col break-words rounded-[12px] bg-gray-10 p-5">
        <h3 className="font-bold">공고 설명</h3>
        <p>{noticeDetail.item.description}</p>
      </div>
    </>
  );
}
