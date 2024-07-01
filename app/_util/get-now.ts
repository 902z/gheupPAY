/**
 * 현재 시점을 RFC 3339 형식으로 변환.
 * @returns {string} 변환된 형식의 현재 시점.
 * @author 홍서하
 */

export function getNow(): string {
  const now = new Date();
  const year = now.getFullYear();
  const month = String(now.getMonth() + 1).padStart(2, "0");
  const day = String(now.getDate()).padStart(2, "0");
  const hours = String(now.getHours()).padStart(2, "0");
  const minutes = String(now.getMinutes()).padStart(2, "0");
  return `${year}-${month}-${day}T${hours}:${minutes}`;
}