/**
 * 정수형을 쉼표 붙인 문자열로 바꿔주는 함수
 * @param {number} number
 * @returns {string} - 콤마 찍힌 문자
 */
export const numberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
