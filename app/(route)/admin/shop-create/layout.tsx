import { Metadata } from "next";
import TitleX from "@/app/_components/title-with-x";

export const metadata: Metadata = {
  title: "가게 정보 등록",
};

export default function ShopCreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="min-h-screen w-full max-w-[964px] px-3 pb-[60px] pt-[142px] md:pb-[80px] md:pt-[130px] mx-auto">
      {children}
    </div>
  );
}
