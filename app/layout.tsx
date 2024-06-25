import type { Metadata } from "next";
import "@/styles/globals.css";
import Header from "./_components/header";
import Footer from "./_components/footer";

export const metadata: Metadata = {
  description:
    "급하게 일손이 필요한 자리에 더 많은 시급을 제공해서 아르바이트생을 구할 수 있는 서비스",
  title: {
    template: "%s | 급PAY",
    default: "급PAY",
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
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
