"use server";
import { getCookie } from "@/app/_util/cookie";
import { isAxiosError } from "axios";
import { getUsersUserIdAlerts } from "../type";
import instance from "@/app/_lib/axios";

export async function getAlerts(offset: number = 0) {
  try {
    const params = new URLSearchParams({
      offset: offset.toString(),
      limit: "6",
    });
    const userId = await getCookie("userId");
    const response = await instance.get<getUsersUserIdAlerts>(
      `/users/${userId}/alerts`,
      {
        params,
      },
    );
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
      throw new Error(error.message);
    } else {
      throw new Error("알 수 없는 오류가 발생했습니다.");
    }
  }
}

export async function putAlerts(id: string) {
  try {
    const userId = await getCookie("userId");
    const response = await instance.put(`/users/${userId}/alerts/${id}`);
    return response.data;
  } catch (error) {
    if (isAxiosError(error)) {
      console.error(error.message);
      throw new Error(error.message);
    } else {
      throw new Error("알 수 없는 오류가 발생했습니다.");
    }
  }
}
