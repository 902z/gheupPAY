"use client";

import { type ReactNode, createContext, useRef, useContext } from "react";
import { useStore } from "zustand";

import { type UserStore, createUserStore } from "@/stores/user-store";

export type UserStoreApi = ReturnType<typeof createUserStore>;

export const UserStoreContext = createContext<UserStoreApi | undefined>(undefined);

export interface UserStoreProviderProps {
  children: ReactNode;
}

export const UserStoreProvider = ({ children }: UserStoreProviderProps) => {
  const storeRef = useRef<UserStoreApi>();
  if (!storeRef.current) {
    storeRef.current = createUserStore();
  }

  return <UserStoreContext.Provider value={storeRef.current}>{children}</UserStoreContext.Provider>;
};

/**
 * zustand를 이용해서 userId에 대한 전역 상태를 관리합니다.
 * 페이지가 이동하더라도 userId가 유지됩니다.
 * example을 보고 그대로 적어주셔야 합니다.
 * 배열 비구조화 할당을 이용해서 사용하기 때문에 사용하지 않는 것들은 _로 처리해주세요.
 * @author 이승현
 * @example
 * const [[login, logout, userId], userStore] = useUserStore((state) => [state.login, state.logout, state.userId]);
 * @param login
 * @param logout
 * @param userId
 * @returns [login, logout, userId]
 */
export const useUserStore = <T,>(selector: (store: UserStore) => T): [T, ReturnType<typeof createUserStore>] => {
  const userStoreContext = useContext(UserStoreContext);

  if (!userStoreContext) {
    throw new Error(`useUserStore must be used within UserStoreProvider`);
  }

  return [useStore(userStoreContext, selector), userStoreContext];
};
