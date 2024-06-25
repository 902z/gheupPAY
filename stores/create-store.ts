import { create } from "zustand";
import { createJSONStorage, persist } from "zustand/middleware";

type UserState = {
  userId: string | null;
  type: "employer" | "employee" | null;
};

type UserActions = {
  login: (userId: string | null, type: "employer" | "employee" | null) => void;
  logout: () => void;
};

export type UserStore = UserState & UserActions;

const createUserStore = create<UserStore>()(
  persist(
    (set, get) => ({
      userId: null,
      type: null,
      login: (userId, type) => set({ userId, type }),
      logout: () => set({ userId: null, type: null }),
    }),
    { name: "user-store", storage: createJSONStorage(() => localStorage) },
  ),
);

export default createUserStore;
