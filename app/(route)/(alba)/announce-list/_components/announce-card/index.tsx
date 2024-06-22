import Image from "next/image";
import React from "react";
import clock from "@/public/icons/clock.png";
import mapPin from "@/public/icons/map-pin.png";
import arrowUpRed40 from "@/public/icons/arrow-up-red-40.png";

export default function AnnounceCard() {
  return (
    <article className="h-[261px] w-[171px] rounded-[12px] border border-gray-20 bg-white p-3 md:h-[349px] md:w-[313px]">
      <div className="h-[82px] w-[147px] rounded-[12px] md:h-[160px] md:w-[280px]">이미지</div>
      <data className="py-2 font-bold md:text-l">식당이름</data>
      <div className="flex items-start gap-1">
        <picture className="h-4 w-4">
          <Image src={clock} alt="시간" />
        </picture>
        <time className="text-s text-gray-50 md:text-m">
          2023-01-02 <br className="md:hidden" /> 15:00~18:00 (3시간)
        </time>
      </div>
      <div className="flex items-center gap-1">
        <picture className="h-4 w-4">
          <Image src={mapPin} alt="장소" />
        </picture>
        <data className="py-2 text-s text-gray-50 md:text-m">서울시 강남구</data>
      </div>
      <div className="flex flex-col md:flex-row md:gap-4 md:py-4">
        <data className="pt-1 font-bold text-ml md:text-xl">10,000원</data>
        <div className="flex items-center text-s text-primary">
          기존 시급보다 50%
          <picture className="h-4 w-4">
            <Image src={arrowUpRed40} alt="up" />
          </picture>
        </div>
      </div>
    </article>
  );
}
