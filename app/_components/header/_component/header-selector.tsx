"use client";
import { useStore } from "@/app/_hooks/use-store";
import createUserStore from "@/stores/create-store";
import HeaderLogin from "./header-login";
import { HeaderNotLogin } from "./header-not-login";

export default function HeaderSelector() {
  const store = useStore(createUserStore, (state) => state);
  if (!store) return null;
  const { userId, login, logout, type } = store;
  return (
    <>
      {!type ? (
        <HeaderNotLogin login={login} />
      ) : (
        <HeaderLogin type={type} logout={logout} />
      )}
    </>
  );
}
