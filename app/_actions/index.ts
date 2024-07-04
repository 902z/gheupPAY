"use server";
import { redirect } from "next/navigation";
import { deleteCookie } from "../_util/cookie";

// 로그아웃을 위한 서버 액션
export async function logout() {
  await deleteCookie("accessToken");
  await deleteCookie("userId");
  await deleteCookie("type");
  redirect("/");
}

export async function redirectAction(url: string) {
  redirect(url);
}
