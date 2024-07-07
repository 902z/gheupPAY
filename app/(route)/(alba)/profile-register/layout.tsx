import { Metadata } from "next";

export const metadata: Metadata = {
  title: "가게 정보 등록",
};

export default function ShopCreateLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <div className="mt-[70px]">
      <div className="ml-auto mr-auto mt-[70px] max-w-[964px] pb-20 pl-3 pr-3 pt-[60px] md:pl-8 md:pr-8">
        <div className="mb-6 flex justify-between">
          <h1 className="font-bold text-l">내 프로필</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
