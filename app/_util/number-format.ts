/**
 * 숫자를 형식화하여 포맷팅합니다. (세자리 콤마 찍기)
 * @param {number} number - 형식화할 숫자입니다.
 * @returns {string} 형식화된 숫자 문자열을 반환합니다.
 * @author 김보미
 */
const formattedNumber = (number: number) =>
  new Intl.NumberFormat().format(number);

export default formattedNumber;
