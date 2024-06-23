import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  title: "급PAY",
  description: "급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>
        <main className="mx-3 mt-[102px] min-h-screen md:mx-8 md:mt-[70px] lg:mx-auto lg:max-w-[964px]">
          {children}
        </main>
      </body>
    </html>
  );
}
