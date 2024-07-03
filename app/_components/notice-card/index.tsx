"use client";
import React from "react";
import Image from "next/image";
import clock from "@/public/icons/clock.png";
import { calculateTimeRange } from "@/app/_util/calculate-time-range";
import formattedNumber from "@/app/_util/number-format";
import mapPin from "@/public/icons/map-pin.png";
import LabelHourlyRate from "@/app/_components/label-hourly-rate";
import { calculateWagePercentage } from "@/app/_util/calculate-wage-percentage ";
import { dateFormat } from "@/app/_util/date-format";
import { GetNotices } from "@/app/_apis/type";
import postNoticeAction from "@/app/actions/post-notice-action";
import { BlindComponent } from "../blind-component";
import compareWorkingDateDiffFromNow from "@/app/_util/calculate-date-diff";

type NoticeCardProps = {
  cardContents: GetNotices["items"][0]["item"];
};

export default function NoticeCard({ cardContents }: NoticeCardProps) {
  const hourlyWage = calculateWagePercentage(cardContents.hourlyPay);
  const date = dateFormat(cardContents.startsAt);
  const isLater: boolean = compareWorkingDateDiffFromNow(
    cardContents.startsAt,
    cardContents.workhour,
  );

  return (
    <div className="cursor-pointer duration-150 hover:scale-105 active:scale-95">
      <div
        key={cardContents.id}
        className="h-[261px] w-full rounded-[12px] border border-gray-20 bg-white p-3 md:h-[349px] lg:w-[305px]"
        onClick={async () => await postNoticeAction(cardContents)}
      >
        <div className="relative mb-2 box-border h-[82px] w-full rounded-[12px] md:h-[160px]">
          <Image
            alt=""
            src={cardContents.shop.item.imageUrl}
            fill={true}
            sizes="100% 100%"
            className="rounded-[12px] object-cover"
          />
          {cardContents.closed ? (
            <BlindComponent description="마감 완료" />
          ) : isLater ? (
            <BlindComponent description="지난 공고" />
          ) : null}
        </div>
        <div className="px-1">
          <data className="font-bold md:text-l">
            {cardContents.shop.item.name}
          </data>
          <div className="flex items-start gap-1">
            <Image src={clock} alt="시간" width={20} height={20} />
            <time className="responsive-text truncate text-s text-gray-50 md:text-m">
              {date} <br className="md:hidden" />{" "}
              {calculateTimeRange(cardContents.startsAt, cardContents.workhour)}{" "}
              ({cardContents.workhour}시간)
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Image src={mapPin} alt="장소" width={20} height={20} />
            <data className="py-2 text-s text-gray-50 md:text-m">
              {cardContents.shop.item.address1}
            </data>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 md:py-4">
            <data className="pt-1 font-bold text-ml md:text-l">
              {formattedNumber(cardContents.hourlyPay)}원
            </data>
            <div className="flex items-center text-s text-primary">
              <LabelHourlyRate percent={hourlyWage} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
