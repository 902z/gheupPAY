import React from "react";
import CustomizedAnnounceCard from "./_components/customized-announce-card";
import { getAllNotices, getCustomizedNotices } from "@/app/_apis/api";
import AllAnnounceCard from "./_components/all-announce-card";
import FilterButton from "./_components/filter-button";

export default async function page() {
  const customizedNotices = await getCustomizedNotices({});
  const allNotices = await getAllNotices({});

  return (
    <div className="mt-[102px] w-full md:mt-[70px] lg:mx-auto">
      <div className="mb-10 bg-red-10 py-12">
        <div className="mx-auto flex w-full flex-col px-2 md:justify-center lg:max-w-[1000px]">
          <h2 className="pb-4 font-bold text-l md:pb-12 md:text-2xl">
            맞춤 공고
          </h2>
          <CustomizedAnnounceCard notices={customizedNotices} />
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col px-2 md:justify-center lg:max-w-[964px]">
        <div className='flex justify-between relative'>
          <h2 className="pb-4 font-bold text-l md:pb-12 md:text-2xl">
            전체 공고
          </h2>
          <FilterButton />
        </div>
        <AllAnnounceCard notices={allNotices} />
      </div>
    </div>
  );
}
