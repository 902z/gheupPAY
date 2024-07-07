export const metadata = {
  title: "공고 수정",
};

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div className="mt-[70px]">
      <div className="ml-auto mr-auto mt-[70px] max-w-[964px] pb-20 pl-3 pr-3 pt-[60px] md:pl-8 md:pr-8">
        <div className="mb-6 flex justify-between">
          <h1 className="font-bold text-l">공고 수정</h1>
        </div>
        {children}
      </div>
    </div>
  );
}
