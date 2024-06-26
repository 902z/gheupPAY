import { Metadata } from "next";
import Link from "next/link";
import TitleX from "@/app/_components/title-with-x";

export const metadata: Metadata = {
  title: "가게 정보 등록",
};

export default function StoreRegisterLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <main className="base-container w-full max-w-[964px] pb-[60px] md:pb-[80px]">
      <TitleX>가게 정보</TitleX>
      {children}
    </main>
  );
}
