import { createStore } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type UserState = {
  userId: string | null;
  type: "employer" | "employee" | null;
};

export type UserActions = {
  login: (userId: string | null, type: "employer" | "employee" | null) => void;
  logout: () => void;
};

export type UserStore = UserState & UserActions;

export const initUserStore = (): UserState => {
  return {
    userId: null,
    type: null,
  };
};

export const defaultInitState: UserState = {
  userId: null,
  type: null,
};

export const createUserStore = (initUser: UserState = defaultInitState) => {
  return createStore<UserStore>()(
    devtools(
      persist(
        (set) =>
          ({
            ...initUser,
            login: (userId: string | null, type: "employer" | "employee" | null) => set({ userId, type }),
            logout: () => set({ userId: null, type: null }),
          }) satisfies UserStore,
        {
          name: "user",
          skipHydration: true,
        },
      ),
    ),
  );
};
