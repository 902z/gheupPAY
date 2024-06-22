import { percentCalculator } from "@/_util/percent-calculator";
import LabelHourlyRate from "@/app/components/label-hourly-rate";
import React from "react";

export default function page() {
  const priceExample = 15000;
  return (
    <div>
      announce-list
      <LabelHourlyRate percent={percentCalculator(priceExample)} />
    </div>
  );
}
