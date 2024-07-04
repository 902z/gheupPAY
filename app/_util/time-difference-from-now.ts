/**
 *
 * @param isoString
 * @returns ~ 전 (ex. 1분 전, 1시간 전, 1일 전, 1달 전)
 * @author 이승현
 */
export default function timeDifferenceFromNow(isoString: string): string {
  const now = new Date();
  const date = new Date(isoString);
  const diffInMilliseconds = now.getTime() - date.getTime();

  const diffInMinutes = Math.floor(diffInMilliseconds / (1000 * 60));
  const diffInHours = Math.floor(diffInMilliseconds / (1000 * 60 * 60));
  const diffInDays = Math.floor(diffInMilliseconds / (1000 * 60 * 60 * 24));
  const diffInMonths = Math.floor(
    diffInMilliseconds / (1000 * 60 * 60 * 24 * 30),
  );

  if (diffInMonths > 0) {
    return `${diffInMonths}달 전`;
  } else if (diffInDays > 0) {
    return `${diffInDays}일 전`;
  } else if (diffInHours > 0) {
    return `${diffInHours}시간 전`;
  } else if (diffInMinutes > 0) {
    return `${diffInMinutes}분 전`;
  } else {
    return `지금`;
  }
}
