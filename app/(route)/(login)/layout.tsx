import type { Metadata } from "next";
import Image from "next/image";
import logo from "@/public/images/logo.png";
import Link from "next/link";

export const metadata: Metadata = {
  title: "Login",
};

export default function LoginLayout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[139px] flex h-screen justify-center md:mt-[279px] lg:mt-[312px]">
      <section className="flex w-full max-w-[374px] flex-col items-center pl-3 pr-3 text-center">
        <Link href="/" className="mb-10">
          <Image src={logo} alt="급pay 로고" />
        </Link>
        {children}
      </section>
    </div>
  );
}
