import React from "react";
import AnnounceCard from "./_components/announce-card";
import getNotices from "@/app/_apis/api";
// import Filter from "./_components/filter";

export default async function page() {
  const data = await getNotices({});

  return (
    <div className="mt-[102px] w-full md:mt-[70px] lg:mx-auto">
      <div className="mb-10 bg-red-10 py-12">
        <div className="mx-auto flex w-full flex-col px-2 md:justify-center lg:max-w-[964px]">
          <h2 className="pb-4 font-bold text-l md:pb-12 md:text-2xl">
            맞춤 공고
          </h2>
          <AnnounceCard notices={data} />
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col px-2 md:justify-center lg:max-w-[964px]">
        <h2 className="pb-4 font-bold text-l md:pb-12 md:text-2xl">
          전체 공고
        </h2>
        {/* <Filter></Filter> */}
      </div>
    </div>
  );
}
