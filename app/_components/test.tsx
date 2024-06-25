"use client";

import useUserStore from "@/stores/user-store";
import { useStore } from "../_hooks/useStore";

export default function Test() {
  const store = useStore(useUserStore, (state) => state);
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
