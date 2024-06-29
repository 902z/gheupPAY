import { Metadata } from "next";
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
    <div className="base-container mt-[60px] w-full max-w-[964px] pb-[60px] md:pb-[80px]">
      {children}
    </div>
  );
}
