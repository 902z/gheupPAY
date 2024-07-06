/**
 * 내일 날짜의 자정을 RFC 3339 형식으로 변환.
 * @returns {string} 변환된 형식의 내일 자정.
 */
export function getTomorrowMidnight(): string {
  const now = new Date();
  const tomorrow = new Date(now.getFullYear(), now.getMonth(), now.getDate() + 1);
  const year = tomorrow.getFullYear();
  const month = String(tomorrow.getMonth() + 1).padStart(2, "0");
  const day = String(tomorrow.getDate()).padStart(2, "0");
  return `${year}-${month}-${day}T00:00:00Z`;
}