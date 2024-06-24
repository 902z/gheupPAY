import { MINIMUN_HOURLY_WAGE } from "@/_constants/MINIMUN_HOURLY_WAGE";

export const calculateWagePercentage = (hourlyWage: number) => {
  if (hourlyWage < MINIMUN_HOURLY_WAGE) {
    throw new Error("최저시급보다 낮게 금액을 설정할 수 없습니다.");
  }
  return Math.round((MINIMUN_HOURLY_WAGE / hourlyWage) * 100);
};
