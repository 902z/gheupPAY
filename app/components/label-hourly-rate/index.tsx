import Image from "next/image";
import React from "react";
import arrowUpRed40 from "@/public/icons/arrow-up-red-40.png";
import arrowUpWhite from "@/public/icons/arrow-up-white.png";

export default function LabelHourlyRate({ percent }: { percent: number }) {
  const getColorByPercentage = (percent: number) => {
    if (percent >= 50) return "md:bg-red-40";
    if (percent >= 30) return "md:bg-red-30";
    if (percent >= 0) return "md:bg-red-20";
  };

  const bgColor = getColorByPercentage(percent);

  return (
    <div
      className={`flex items-center bg-white text-s text-primary ${bgColor} md:h-[36px] md:w-[159px] md:justify-center md:rounded-3xl md:p-2 md:text-white`}
    >
      <p className="md:font-bold md:text-m">기존 시급보다 {percent}%</p>
      <picture className="pl-1">
        <source srcSet={arrowUpRed40.src} media="(max-width: 768px)" width={16} height={16} />
        <Image src={arrowUpWhite} alt="" width={20} height={20} />
      </picture>
    </div>
  );
}
