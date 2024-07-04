import { MINIMUM_HOURLY_WAGE } from "../_constants/hourly-wage";

/**
 * 주어진 시급이 최저시급 대비 몇 퍼센트인지를 계산합니다.
 *
 * @param {number} hourlyWage - 계산하려는 시급
 * @returns {number} 최저시급 대비 퍼센트 값 (반올림됨)
 * @author 김보미
 */

export const calculateWagePercentage = (hourlyWage: number) => {
  if (hourlyWage < MINIMUM_HOURLY_WAGE) {
    return 0;
  }
  return Math.round(
    ((hourlyWage - MINIMUM_HOURLY_WAGE) / MINIMUM_HOURLY_WAGE) * 100,
  );
};
