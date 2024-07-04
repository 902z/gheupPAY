/**
 * @author 이승현
 * @param isoString IsoString 형식으로 받은 시간
 * @param workHours 일하는 시간
 * @returns 지났으면 true, 아니면 false
 */
export default function compareWorkingDateDiffFromNow(
  isoString: string,
  workHours: number,
): boolean {
  const date = new Date(isoString);
  date.setHours(date.getHours() + workHours);
  const getNow = new Date();
  return date.getTime() - getNow.getTime() <= 0;
}
