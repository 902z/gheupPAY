export function NoticeCardSkeleton() {
  return (
    <div className="h-[261px] w-full rounded-[12px] border border-gray-20 bg-white p-3 md:h-[349px] lg:w-[305px]">
      <div className="relative mb-2 box-border h-[82px] w-full animate-pulse rounded-[12px] bg-gray-20 md:h-[160px]"></div>
      <div className="rounded-xl px-1">
        <data className="block h-5 w-full"></data>
        <div className="flex items-start gap-1">
          <div className="h-5 w-5"></div>
          <time className="responsive-text block h-3 truncate text-gray-50 md:h-3.5"></time>
        </div>
        <div className="flex items-center gap-1">
          <div className="h-5 w-5"></div>
          <data className="py-2 text-s text-gray-50 md:text-m"></data>
        </div>
        <div className="flex flex-col md:flex-row md:gap-4 md:py-4">
          <data className="pt-1 font-bold text-ml md:text-l"></data>
          <div className="flex items-center text-s text-primary"></div>
        </div>
      </div>
    </div>
  );
}
