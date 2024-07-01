"use client";

import { logout } from "@/app/_actions";

// 이벤트 핸들러에 서버액션 쓰려면 client component에서 사용해야함.
export function LogoutButton() {
  return (
    <button
      onClick={async () => {
        await logout();
      }}
    >
      로그아웃
    </button>
  );
}
