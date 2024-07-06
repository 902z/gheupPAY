import Image from "next/image";
import React from "react";
import arrowUpWhite from "@/public/icons/arrow-up-white.png";

const getColorByPercentage = (percent: number) => {
  if (percent >= 50) return "bg-red-40";
  if (percent >= 30) return "bg-red-30";
  if (percent >= 0) return "bg-red-20";
};

export default function OnlyLabelHourlyRate({ percent }: { percent: number }) {
  const bgColor = getColorByPercentage(percent);

  return (
    <div
      className={`flex items-center ${bgColor} h-[36px] w-[150px] justify-center rounded-3xl text-white`}
    >
      <p className="text-center font-bold text-s">최저시급보다 {percent}%</p>
      <Image src={arrowUpWhite} alt="" width={20} height={20} />
    </div>
  );
}
