/**
 * 날짜 문자열을 YYYY-MM-DD 형식으로 포맷합니다.
 * @param {string} dateString - 포맷할 날짜 문자열입니다.
 * @returns {string} 포맷된 YYYY-MM-DD 형식의 날짜 문자열입니다.
 * @author 김보미
 */
export const dateFormat = (dateString: string): string => {
  const date = new Date(dateString);

  const year = date.getFullYear();
  const month = String(date.getMonth() + 1).padStart(2, "0");
  const day = String(date.getDate()).padStart(2, "0");

  const formattedDate = `${year}-${month}-${day}`;

  return formattedDate;
};
