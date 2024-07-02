import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import clock from "@/public/icons/clock.png";
import { calculateTimeRange } from "@/app/_util/calculate-time-range";
import formattedNumber from "@/app/_util/number-format";
import mapPin from "@/public/icons/map-pin.png";
import LabelHourlyRate from "@/app/_components/label-hourly-rate";
import { calculateWagePercentage } from "@/app/_util/calculate-wage-percentage ";
import { dateFormat } from "@/app/_util/date-format";
import { GetNotices } from "@/app/_apis/type";
import useUserStore from "@/stores/create-store";
import Link from "next/link";

type NoticeCardProps = {
  cardContents: GetNotices["items"][0]["item"];
};

export default function NoticeCard({ cardContents }: NoticeCardProps) {
  const postNotice = useUserStore((state) => state.postNotice);

  const hourlyWage = calculateWagePercentage(cardContents.hourlyPay);
  const date = dateFormat(cardContents.startsAt);

  return (
    <>
      <Link
        href={`/notice-detail/${cardContents.shop.item.id}/${cardContents.id}`}
      >
        <motion.div
          key={cardContents.id}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="cursor-pointer"
        >
          <div
            key={cardContents.id}
            className="h-[261px] w-full rounded-[12px] border border-gray-20 bg-white p-3 md:h-[349px] lg:w-[305px]"
            onClick={() => postNotice(cardContents)}
          >
            <div className="relative mb-2 box-border h-[82px] w-full rounded-[12px] md:h-[160px]">
              <Image
                alt=""
                src={cardContents.shop.item.imageUrl}
                fill={true}
                layout="fill"
                objectFit="cover"
                className="rounded-[12px] border border-black border-opacity-10"
              />
            </div>
            <div className="px-1">
              <data className="font-bold md:text-l">
                {cardContents.shop.item.name}
              </data>
              <div className="flex items-start gap-1">
                <Image src={clock} alt="시간" width={20} height={20} />
                <time className="responsive-text truncate text-s text-gray-50 md:text-m">
                  {date} <br className="md:hidden" />{" "}
                  {calculateTimeRange(
                    cardContents.startsAt,
                    cardContents.workhour,
                  )}{" "}
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
        </motion.div>
      </Link>
    </>
  );
}
