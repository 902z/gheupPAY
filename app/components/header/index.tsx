"use client";
import { useState } from "react";
import HeaderLogin from "./_component/header-login";
import { HeaderNotLogin } from "./_component/header-not-login";

interface User {
  userId: string | null;
  type: "employer" | "employee" | null;
}

export default function Header() {
  const [user, setUser] = useState<User>({
    userId: null,
    type: null,
  });

  const handleEmployer = () => {
    setUser({
      userId: "test",
      type: "employer",
    });
  };
  const handleEmployee = () => {
    setUser({
      userId: "test",
      type: "employee",
    });
  };
  const handleLogout = () => {
    setUser({
      userId: null,
      type: null,
    });
  };

  return (
    <>
      {user.type !== null ? (
        <HeaderLogin onClick={handleLogout} type={user.type} />
      ) : (
        <HeaderNotLogin onClick={handleEmployer} />
      )}
    </>
  );
}
