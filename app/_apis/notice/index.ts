import instance from "@/app/_lib/axios";
import { getCookie } from "@/app/_util/cookie";
import {
  GetNotices,
  GetShopsShopIdNotices,
  GetShopsShopIdNoticesNoticeId,
  GetUsersUserId,
  PostShopsShopIdNotices,
  PutShopsShopIdNoticesNoticeId,
} from "../type";
import { isAxiosError } from "axios";
import notification from "@/app/_util/notification";
import { API_ERROR_MESSAGE } from "@/app/_constants/error-message";

// 맞춤 공고
export async function getCustomizedNotices(address: string) {
  try {
    const params = new URLSearchParams({
      offset: "0",
      limit: "5",
      address,
      sort: "pay",
    });

    const res = await instance.get<GetNotices>(`/notices?${params.toString()}`);
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
      address.forEach((addr) => params.append("address", addr));
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

// 가게의 공고 목록 조회
interface getShopNoticeListParams {
  shop_id: string;
  offset?: number;
  limit?: number;
}
type GetShopNotice = (
  params: getShopNoticeListParams,
) => Promise<GetShopsShopIdNotices>;

export const getShopNoticeList: GetShopNotice = async ({
  shop_id,
  offset = 0,
  limit = 6,
}) => {
  try {
    const QueryParams = new URLSearchParams({
      offset: offset.toString(),
      limit: limit.toString(),
    });
    const res = await instance.get<GetShopsShopIdNotices>(
      `/shops/${shop_id}/notices?${QueryParams.toString()}`,
    );
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        throw new Error(error.response.data.message);
      }
    }
    console.error("getUser 함수에서 오류 발생:", error);
    throw new Error(API_ERROR_MESSAGE);
  }
};

type postCreateNoticeParams = {
  hourlyPay: number;
  startsAt: string;
  workhour: number;
  description: string;
};

export async function getShopId() {
  try {
    const userId = await getCookie("userId");
    const res = await instance.get<GetUsersUserId>(`/users/${userId}`);
    const shopId = res.data.item.shop?.item.id;
    return shopId;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        const message = error.response.data.message;
        notification(`${message ?? ""}`, "error");
      }
    } else {
      notification(`${API_ERROR_MESSAGE}`, "error");
    }
    throw new Error(API_ERROR_MESSAGE);
  }
}

export async function postCreateNotice(params: postCreateNoticeParams) {
  try {
    const shopId = await getShopId();
    const res = await instance.post<PostShopsShopIdNotices>(
      `/shops/${shopId}/notices`,
      params,
    );
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (
        error.response?.status === 400 ||
        error.response?.status === 403 ||
        error.response?.status === 404
      ) {
        const message = error.response.data.message;
        notification(`${message ?? ""}`, "error");
      }
    } else {
      notification(`${API_ERROR_MESSAGE}`, "error");
    }
    throw new Error(API_ERROR_MESSAGE);
  }
}

export async function getNoticeInfo(shopId: string, noticeId: string) {
  try {
    const res = await instance.get<GetShopsShopIdNoticesNoticeId>(
      `/shops/${shopId}/notices/${noticeId}`,
    );
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (error.response?.status === 404) {
        const message = error.response.data.message;
        notification(`${message ?? ""}`, "error");
      } else {
        notification(`${API_ERROR_MESSAGE}`, "error");
      }
    }
    throw error;
  }
}

export async function putNoticeEdit(
  params: postCreateNoticeParams,
  shopId: string,
  noticeId: string,
) {
  try {
    const res = await instance.put<PutShopsShopIdNoticesNoticeId>(
      `/shops/${shopId}/notices/${noticeId}`,
      params,
    );
    return res.data;
  } catch (error) {
    if (isAxiosError(error)) {
      if (
        error.response?.status === 400 ||
        error.response?.status === 403 ||
        error.response?.status === 404
      ) {
        const message = error.response.data.message;
        notification(`${message ?? ""}`, "error");
      }
    } else {
      notification(`${API_ERROR_MESSAGE}`, "error");
    }
    throw error;
  }
}
