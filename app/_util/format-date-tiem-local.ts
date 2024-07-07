export function formatDateToDateTimeLocal(date: Date): string {
  const pad = (num: number): string => num.toString().padStart(2, "0");
  const year: number = date.getFullYear();
  const month: string = pad(date.getMonth() + 1);
  const day: string = pad(date.getDate());
  const hours: string = pad(date.getHours());
  const minutes: string = pad(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}
