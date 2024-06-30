import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";
import { getCookie } from "./app/_util/cookie";

export default async function loginRequired(request: NextRequest) {
  const token = await getCookie("accessToken");
  const type = await getCookie("type");
  if (request.nextUrl.pathname === "/") {
    return NextResponse.next();
  }
  if (!token) {
    return NextResponse.redirect(new URL("/login", request.url));
  }
  if (type === "employee" && request.nextUrl.pathname.startsWith("/admin")) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  if (
    type === "employer" &&
    (request.nextUrl.pathname.startsWith("/profile-detail") ||
      request.nextUrl.pathname.startsWith("/profile-register"))
  ) {
    return NextResponse.redirect(new URL("/", request.url));
  }
  return NextResponse.next();
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!login|signup|notice-list|notice-detail|api|_next/static|_next/image|favicon.ico).*)",
  ],
};
