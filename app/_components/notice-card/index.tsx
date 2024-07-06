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
import { useRouter } from "next/navigation";
import compareWorkingDateDiffFromNow from "@/app/_util/calculate-date-diff";
import postNoticeAction from "@/app/actions/post-notice-action";
import { BlindComponent } from "../blind-component";

type NoticeCardProps = {
  noticeId: string;
  shopId: string;
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  name: string;
  address1: string;
  imageUrl: string;
  content?: GetNotices["items"][0]["item"];
  closed: boolean;
  isEmployer?: boolean;
};

export default function NoticeCard({
  hourlyPay,
  startsAt,
  workhour,
  noticeId,
  shopId,
  imageUrl,
  name,
  address1,
  content,
  closed,
  isEmployer,
}: NoticeCardProps) {
  const hourlyWage = calculateWagePercentage(hourlyPay);
  const date = dateFormat(startsAt);
  const isLater: boolean = compareWorkingDateDiffFromNow(startsAt, workhour);
  const router = useRouter();

  const handleClick = async () => {
    if (content) {
      await postNoticeAction(content);
      if (isEmployer) router.push(`/admin/notice-detail/${shopId}/${noticeId}`);
      else router.push(`/notice-detail/${shopId}/${noticeId}`);
    }
  };

  return (
    <article className="cursor-pointer duration-150 hover:scale-105 active:scale-95">
      <div
        key={noticeId}
        className="h-[261px] w-full rounded-[12px] border border-gray-20 bg-white p-3 md:h-[359px] lg:h-[349px] lg:w-[305px]"
        onClick={handleClick}
      >
        <div className="relative mb-2 box-border h-[82px] w-full rounded-[12px] md:h-[170px] lg:h-[160px]">
          <Image
            alt=""
            src={imageUrl}
            fill={true}
            sizes="100% 100%"
            className="rounded-[12px] object-cover"
          />
          {closed ? (
            <BlindComponent description="마감 완료" />
          ) : isLater ? (
            <BlindComponent description="지난 공고" />
          ) : null}
        </div>
        <div className="px-1">
          <data className="font-bold md:text-l">{name}</data>
          <div className="flex items-start gap-1">
            <Image src={clock} alt="시간" width={20} height={20} />
            <time className="responsive-text truncate text-s text-gray-50 md:text-m">
              {date} <br className="md:hidden" />{" "}
              {calculateTimeRange(startsAt, workhour)} ({workhour}시간)
            </time>
          </div>
          <div className="flex items-center gap-1">
            <Image src={mapPin} alt="장소" width={20} height={20} />
            <data className="py-2 text-s text-gray-50 md:text-m">
              {address1}
            </data>
          </div>
          <div className="flex flex-col md:flex-row md:gap-4 md:py-4">
            <data className="pt-1 font-bold text-ml md:text-l">
              {formattedNumber(hourlyPay)}원
            </data>
            <div className="flex items-center text-s text-primary">
              <LabelHourlyRate percent={hourlyWage} />
            </div>
          </div>
        </div>
      </div>
    </article>
  );
}
