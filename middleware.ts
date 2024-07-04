import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCookie } from "./app/_util/cookie";

/**
 * 사이트의 제한 조건에 걸렸을 때 다른 곳으로 리다이렉트 시켜주는 미들웨어입니다.
 * @author 이승현
 * @param request
 * @returns
 */
export default async function loginRequired(request: NextRequest) {
  const token = await getCookie("accessToken");
  const type = await getCookie("type");
  const isLandingPage = request.nextUrl.pathname === "/";
  const isAdminPage = request.nextUrl.pathname.startsWith("/admin");
  const isAlbaPage =
    request.nextUrl.pathname.startsWith("/profile-detail") ||
    request.nextUrl.pathname.startsWith("/profile-register");

  if (isLandingPage && token) {
    return NextResponse.redirect(new URL("/notice-list", request.url));
  }

  if (isLandingPage) {
    return NextResponse.next();
  }

  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }

  if (type === "employee" && isAdminPage) {
    return NextResponse.redirect(new URL("/notice-list", request.url));
  }
  if (type === "employer" && isAlbaPage) {
    return NextResponse.redirect(new URL("/notice-list", request.url));
  }

  return NextResponse.next();
}

export const config = {
  matcher: [
    // 아래 페이지들은 공통으로 들어갈 수 있는 페이지입니다.
    "/((?!login|signup|notice-list|notice-detail|api|_next/static|_next/image|images|icons|fonts|favicon.ico).*)",
  ],
};
