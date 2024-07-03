export const CATEGORY = [
  "한식",
  "중식",
  "일식",
  "양식",
  "분식",
  "카페",
  "편의점",
  "기타",
] as const;

export type CategoryType = (typeof CATEGORY)[number];

export const CUISINE_OPTION: { label: string; value: CategoryType }[] = [
  { label: "🍚한식", value: "한식" },
  { label: "🥟중식", value: "중식" },
  { label: "🍔양식", value: "양식" },
  { label: "🍣일식", value: "일식" },
  { label: "🍜분식", value: "분식" },
  { label: "🍙편의점", value: "편의점" },
  { label: "🍽️기타", value: "기타" },
  { label: "🍰카페", value: "카페" },
];
