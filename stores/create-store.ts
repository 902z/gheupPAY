import { GetNotices } from "@/app/_apis/type";
import { deleteCookie } from "@/app/_util/cookie";
import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  type: "employer" | "employee" | null;
  noticesData: GetNotices["items"][0]["item"][];
};

type UserActions = {
  login: (type: "employer" | "employee") => void;
  logout: () => void;
  postNotice: (notice: UserState["noticesData"][0]) => void;
};

export type UserStore = UserState & UserActions;
/**
 * @description
 * store를 사용하기 위한 hook입니다.
 * hydration을 위해서 따로 처리가 되어있으니 이제 그냥 사용하시면 됩니다.
 * 아래 예시는 type과 login을 하나씩 가져와서 사용하는 예시입니다.
 * @example
 * "use client";

import useUserStore from "@/stores/user-store";

export default function Test() {
  const login = useUserStore((state) => state.login);
  const type = useUserStore((state) => state.type);
  
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

@description
아래 예시는 스토어 전체를 가져와서 사용하는 예시입니다.
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

@description
아래 예시는 포스트를 사용하는 예시입니다! pr에 있는 영상과 일치하는 코드에요!
@example

export default function AnnounceCard({ notices }: AnnounceCardProps) {
  const postNotice = useUserStore((state) => state.postNotice);
  // postNotice라는 함수를 가져온다.

  return (
    <>
      {notices &&
        notices.map((notice) => {
          const hourlyWage = calculateWagePercentage(notice.item.hourlyPay);
          const date = dateFormat(notice.item.startsAt);
          return (
            <>
              <button onClick={() => postNotice(notice.item)}>
              // postNotice를 이용해서 notice를 업데이트한다.
                포스트 데이터 추가
              </button>

주의할 점은 store 전체를 가져올 경우 상태 변경시 변경된 상태와 관련된 것이 아니더라도 
상관없이 컴포넌트 전체 리렌더링이 일어납니다.
주의해주세요. 하나만 필요하면 하나만 가져오는 걸 권장합니다.
 * @param (state)=>state 혹은 (state)=>state.type 형태로 사용하면 됩니다.
 * @returns 원하는 state
 */
const useUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      type: null,
      noticesData: [],
      login: (type: "employer" | "employee") => set({ type: type }),
      logout: async () => {
        set({ type: null });
        await deleteCookie("accessToken");
        await deleteCookie("userId");
      },
      postNotice: (notice) => {
        const notices = get().noticesData;
        if (notices.some((n) => n.id === notice.id)) return;
        if (notices.length >= 6) {
          set({ noticesData: [notice, ...notices.slice(0, 5)] });
        } else {
          set({ noticesData: [notice, ...notices] });
        }
      },
    }),
    {
      name: "user-store",
      storage: createJSONStorage(() => localStorage),
      skipHydration: true,
    },
  ),
);

export default useUserStore;
