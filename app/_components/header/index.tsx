"use client";
import { useState } from "react";
import HeaderLogin from "./_component/header-login";
import { HeaderNotLogin } from "./_component/header-not-login";
import Image from "next/image";
import Link from "next/link";
import SearchBar from "./_component/search-bar";

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
    <header className="fixed left-0 right-0 top-0 grid h-[102px] grid-cols-2 grid-rows-2 bg-white px-5 pb-[10px] pt-[15px] md:flex md:h-[70px]">
      <Link
        href="/"
        className="relative col-start-1 h-[30px] w-[84px] md:h-10 md:w-28"
      >
        <Image src="/images/logo.png" alt="Logo" fill />
      </Link>
      <SearchBar className="col-span-full" />
      <nav className="col-start-2 row-start-1 flex items-start gap-4 justify-self-end font-bold text-m">
        {user.type !== null ? (
          <HeaderLogin onClick={handleLogout} type={user.type} />
        ) : (
          <HeaderNotLogin onClick={handleEmployer} />
        )}
      </nav>
    </header>
  );
}
