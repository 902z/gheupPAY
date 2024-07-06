/**
 * 현 시점에서 30분 후의 시간을 RFC 3339 형식으로 변환.
 * @returns {string} 변환된 형식의 30분 후 시간.
 */
export function getThirtyMinutesLater(): string {
  const now = new Date();
  now.setMinutes(now.getMinutes() + 30);
  
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  const seconds = String(now.getSeconds()).padStart(2, "0");

  return `${year}-${month}-${day}T${hours}:${minutes}:${seconds}Z`;
}