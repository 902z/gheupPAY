import { MINIMUN_HOURLY_WAGE } from "@/_constants/MINIMUN_HOURLY_WAGE";

/**
 * 주어진 시급이 최저시급 대비 몇 퍼센트인지를 계산합니다.
 *
 * @param {number} hourlyWage - 계산하려는 시급
 * @returns {number} 최저시급 대비 퍼센트 값 (반올림됨)
 * @throws {Error} 주어진 시급이 최저시급보다 낮을 때 에러를 발생시킴
 */

export const calculateWagePercentage = (hourlyWage: number) => {
  if (hourlyWage < MINIMUN_HOURLY_WAGE) {
    throw new Error("최저시급보다 낮게 금액을 설정할 수 없습니다.");
  }
  return Math.round((MINIMUN_HOURLY_WAGE / hourlyWage) * 100);
};
