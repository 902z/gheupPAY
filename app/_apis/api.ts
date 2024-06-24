import instance from "../_lib/axios";

export default async function getNotices({
  offset = 0,
  limit = 3,
  // address = "",
  // keyword = "",
  // startsAtGte = "",
  // hourlyPayGte = 0,
  // sort = "pay",
}) {
  try {
    const params = new URLSearchParams({
      offset: offset.toString(),
      limit: limit.toString(),
      // address,
      // keyword,
      // startsAtGte,
      // hourlyPayGte: hourlyPayGte.toString(),
      // sort,
    });

    const res = await instance.get(`/notices?${params.toString()}`);
    return res.data.items;
  } catch (error) {
    console.error("getNotices 함수에서 오류 발생:", error);
    throw error;
  }
}
