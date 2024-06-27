import { useState, useEffect } from "react";

/**
 * @description
 * hydration 오류 없이 nextjs에서 전역 상태를 사용할 수 있는 커스텀 훅입니다.
 * example을 잘 보시고 사용해주세요
 * 
 * @example
 * "use client";
import createUserStore from "@/stores/user-store";
import { useStore } from "zustand";

export default function Test2() {
  const userId = useStore(createUserStore, (state) => state.userId);
  const logout = useStore(createUserStore, (state) => state.logout);
  const LogoutButton = () => {
    return <button onClick={logout}>{userId}</button>;
  };
  return <LogoutButton />;
}

위 예시는 user-store.ts에서 userId와 logout을 하나씩 가져와서 사용하는 예시입니다.

@example
"use client";

import createUserStore from "@/stores/create-store";
import { useStore } from "../_hooks/use-store";

export default function Test() {
  const store = useStore(createUserStore, (state) => state);
  if (!store) return null;
  const { userId, login, logout, type } = store;

  const handleLogin = () => {
    login("user", "employer");
  };

  const handleLogout = logout;

  return (
    <header className="flex justify-between">
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <p>{userId}</p>
      <p>{type}</p>
    </header>
  );
}

위 예시는 store 전체를 가져와서 사용하는 예시입니다.
단 주의할 점은 store 전체를 가져왔기 때문에 다른 곳에서 store를 변화시키면
리턴값에 포함되든 안되든 상관없이 컴포넌트 전체 리렌더링이 일어납니다.
주의해주세요. 하나만 필요하면 하나만 가져오는 걸 권장합니다.
* @param store {store} zustand store
 * @param callback {(state: T) => unknown} store에서 가져올 값
 * @returns 원하는 state
 */
export const useStore = <T, F>(
  store: (callback: (state: T) => unknown) => unknown,
  callback: (state: T) => F,
) => {
  const result = store(callback) as F;
  const [data, setData] = useState<F>();

  useEffect(() => {
    setData(result);
  }, [result]);

  return data;
};
