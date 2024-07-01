import instance from "@/app/_lib/axios";

// 맞춤 공고
export async function getCustomizedNotices({ offset = 0, limit = 5 }) {
  try {
    const params = new URLSearchParams({
      offset: offset.toString(),
      limit: limit.toString(),
    });

    const res = await instance.get(`/notices?${params.toString()}`);
    return res.data;
  } catch (error) {
    console.error("getNotices 함수에서 오류 발생:", error);
    throw error;
  }
}

// 전체 공고
export async function getAllNotices({
  offset = 0,
  limit = 12,
  keyword = "",
  hourlyPayGte = 0,
  startsAtGte = "",
  address = [],
  sort = "time",
}: {
  offset?: number;
  limit?: number;
  keyword?: string;
  hourlyPayGte?: number;
  startsAtGte?: string;
  address?: string[];
  sort?: string;
}) {
  try {
    const params = new URLSearchParams({
      offset: offset.toString(),
      limit: limit.toString(),
      hourlyPayGte: hourlyPayGte.toString(),
      keyword,
      sort,
    });
    if (Array.isArray(address)) {
      address.forEach(addr => params.append("address", addr));
    } else if (address) {
      params.append("address", address);
    }
    if (startsAtGte) {
      params.append("startsAtGte", startsAtGte);
    }

    const res = await instance.get(`/notices?${params.toString()}`);
    return res.data;
  } catch (error) {
    console.error("getAllNotices 함수에서 오류 발생:", error);
    throw error;
  }
}
