import { createStore } from "zustand";
import { devtools, persist } from "zustand/middleware";

export type UserState = {
  userId: string | null;
};

export type UserActions = {
  login: (userId: string | null) => void;
  logout: () => void;
};

export type UserStore = UserState & UserActions;

export const initUserStore = (): UserState => {
  return {
    userId: null,
  };
};

export const defaultInitState: UserState = {
  userId: null,
};

export const createUserStore = (initUser: UserState = defaultInitState) => {
  return createStore<UserStore>()(
    devtools(
      persist(
        (set) =>
          ({
            ...initUser,
            login: (userId: string | null) => set({ userId }),
            logout: () => set({ userId: null }),
          }) satisfies UserStore,
        {
          name: "user-id",
          skipHydration: true,
        },
      ),
    ),
  );
};
