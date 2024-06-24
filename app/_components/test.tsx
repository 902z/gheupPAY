"use client";

import { useUserStore } from "@/providers/user-store-provider";
import { useEffect } from "react";

export default function Test() {
  const [[login, logout, userId], userStore] = useUserStore((state) => [state.login, state.logout, state.userId]);
  useEffect(() => {
    userStore.persist.rehydrate();
  }, []);

  const handleLogin = () => {
    login("user");
  };

  const handleLogout = logout;

  return (
    <>
      <button onClick={handleLogin}>login</button>
      <button onClick={handleLogout}>logout</button>
      <p>{userId}</p>
    </>
  );
}
