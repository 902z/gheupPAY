"use client";
import createUserStore from "@/stores/create-store";
import HeaderLogin from "./header-login";
import { HeaderNotLogin } from "./header-not-login";

export default function HeaderSelector() {
  const type = createUserStore((state) => state.type);

  return <>{!type ? <HeaderNotLogin /> : <HeaderLogin />}</>;
}
