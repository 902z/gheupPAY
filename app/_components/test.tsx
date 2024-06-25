"use client";

import createUserStore from "@/stores/create-store";
import { useStore } from "../_hooks/use-store";

export default function Test() {
  const store = useStore(createUserStore, (state) => state);
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
