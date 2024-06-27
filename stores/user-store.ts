import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  type: "employer" | "employee" | null;
};

type UserActions = {
  login: (type: "employer" | "employee") => void;
  logout: () => void;
};

export type UserStore = UserState & UserActions;
/**
 * @description
 * store를 사용하기 위한 hook입니다.
 * hydration을 위해서 따로 처리가 되어있으니 이제 그냥 사용하시면 됩니다.
 * @example
 * "use client";

import useUserStore from "@/stores/user-store";

export default function Test() {
  const { login, type } = useUserStore((state) => state);

  const handleLogin = () => {
    login("employer");
  };

  return (
    <header className="flex justify-between">
      <button onClick={handleLogin}>login</button>
      <p>{type}</p>
    </header>
  );
}

위 예시는 user-store.ts에서 type와 login을 하나씩 가져와서 사용하는 예시입니다.

@example
"use client";

import useUserStore from "@/stores/user-store";

export default function Test() {
  const { login, logout, type } = useUserStore((state) => state);

  const handleLogin = () => {
    login("employer");
  };

  const handleLogout = logout;

  return (
    <header className="flex justify-between">
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <p>{type}</p>
    </header>
  );
}

위 예시는 store 전체를 가져와서 사용하는 예시입니다.
단 주의할 점은 store 전체를 가져왔기 때문에 다른 곳에서 store를 변화시키면
리턴값에 포함되든 안되든 상관없이 컴포넌트 전체 리렌더링이 일어납니다.
주의해주세요. 하나만 필요하면 하나만 가져오는 걸 권장합니다.
 * @param (state)=>state 혹은 (state)=>state.type 형태로 사용하면 됩니다.
 * @returns 원하는 state
 */
const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      type: null,
      login: (type: "employer" | "employee") => set({ type: type }),
      logout: () => set({ type: null }),
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);

export default useUserStore;
