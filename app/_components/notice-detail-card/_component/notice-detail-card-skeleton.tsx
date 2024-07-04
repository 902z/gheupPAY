import Button from "../../button";

export default function NoticeDetailCardSkeleton() {
  return (
    <>
      <div>
        <h3 className="mb-1 h-[17px] w-7 animate-pulse rounded-lg bg-gray-20 font-bold"></h3>
        <data className="block h-6 w-40 animate-pulse rounded-lg bg-gray-20 font-bold"></data>
      </div>
      <div className="box-border flex h-fit w-full flex-col rounded-[12px] border border-gray-10 bg-white p-5 lg:flex-row lg:gap-4">
        <div className="relative mb-2 box-border h-[180px] w-full animate-pulse rounded-[12px] bg-gray-20 md:h-[360px] lg:h-[308px] lg:w-[539px]"></div>
        <div className="relative flex-1 px-1 lg:flex lg:flex-col lg:items-stretch lg:py-3">
          <div className="lg:flex-1">
            <h3 className="mt-1 h-[17px] w-7 animate-pulse rounded-lg font-bold"></h3>
            <div className="flex h-[18px] gap-2 rounded-2xl py-2">
              <data className="h-[52px] w-60 animate-pulse rounded-lg pt-1 font-bold text-ml md:h-9 md:text-l"></data>
            </div>
            <div className="flex h-20 w-full animate-pulse items-start gap-1">
              <time className="w-full md:h-[18px]"></time>
            </div>
            <div className="flex h-5 w-24 animate-pulse items-center gap-1"></div>
            <div className="h-5 w-10 animate-pulse break-words py-4"></div>
          </div>
          <Button
            btnColor="white"
            className="h-11 animate-pulse !bg-gray-20 font-bold md:h-[54px]"
            disabled
          ></Button>
        </div>
      </div>
      <div className="mt-4 box-border flex h-[88px] animate-pulse flex-col break-words rounded-[12px] bg-gray-10 p-5">
        <h3 className="font-bold"></h3>
        <p></p>
      </div>
    </>
  );
}
