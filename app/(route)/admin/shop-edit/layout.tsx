export const metadata = {
  title: "가게 정보 편집",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mx-auto min-h-screen w-full max-w-[964px] px-3 pb-[60px] pt-[142px] md:pb-[80px] md:pt-[130px]">
      <header className="h- flex w-full justify-between">
        <h1 className="font-bold text-l leading-[25px]">가게 정보</h1>
      </header>
      {children}
    </div>
  );
}
