import { calculateWagePercentage } from "@/_util/calculate-wage-percentage ";
import LabelHourlyRate from "@/app/components/label-hourly-rate";
import React from "react";
import AnnounceCard from "./_components/announce-card";

/**
 * 주어진 시급이 최저시급 대비 몇 퍼센트인지를 계산합니다.
 *
 * @param {number} hourlyWage - 계산하려는 시급
 * @returns {number} 최저시급 대비 퍼센트 값 (반올림됨)
 * @throws {Error} 주어진 시급이 최저시급보다 낮을 때 에러를 발생시킴
 */

export default function page() {
  const priceExample = 15000;
  return (
    <div>
      <h2 className="font-bold text-2xl">맞춤 공고</h2>
      <AnnounceCard />
      <h2 className="font-bold text-2xl">전체 공고</h2>
      <LabelHourlyRate percent={calculateWagePercentage(priceExample)} />
    </div>
  );
}
