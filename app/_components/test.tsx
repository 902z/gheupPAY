"use client";

import { useUserStore } from "@/providers/user-store-provider";
import { useEffect } from "react";

export default function Test() {
  const [[login, logout, userId, type], userStore] = useUserStore((state) => [
    state.login,
    state.logout,
    state.userId,
    state.type,
  ]);
  useEffect(() => {
    userStore.persist.rehydrate();
  }, []);

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
