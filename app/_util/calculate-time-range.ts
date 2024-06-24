/**
 * startsAt과 workhour를 기반으로 시간 범위를 계산합니다.
 * @param {string} startsAt - ISO 8601 형식의 시작 시간 문자열입니다.
 * @param {number} workhour - 작업 시간(시간 단위)입니다.
 * @returns {string} HH:mm~HH:mm 형식으로 포맷된 시간 범위 문자열을 반환합니다.
 */
export const calculateTimeRange = (startsAt: string, workhour: number) => {
  const startDate = new Date(startsAt);
  const endDate = new Date(startDate.getTime() + workhour * 60 * 60 * 1000);

  const startTime = `${String(startDate.getHours()).padStart(2, "0")}:${String(startDate.getMinutes()).padStart(2, "0")}`;
  const endTime = `${String(endDate.getHours()).padStart(2, "0")}:${String(endDate.getMinutes()).padStart(2, "0")}`;

  return `${startTime}~${endTime}`;
};
