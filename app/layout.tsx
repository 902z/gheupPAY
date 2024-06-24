import type { Metadata } from "next";
import "@/styles/globals.css";

export const metadata: Metadata = {
  description: "급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스",
  title: {
    template: "%s | 급페이",
    default: "급페이",
  },
  icons: {
    icon: "/icons/favicon.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body>{children}</body>
    </html>
  );
}
