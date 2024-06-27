import React from "react";
import CustomizedNoticeList from "./_components/customized-notice";
import AllNoiceList from "@/app/_components/notice-list";
import { getAllNotices, getCustomizedNotices } from "@/app/_apis/notice";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

export default async function page({ searchParams }: SearchParamsProps) {
  const customizedNotices = await getCustomizedNotices({});
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 12;
  const offset = (page - 1) * limit;
  const allNotices = await getAllNotices({ offset, limit });

  return (
    <div className="mt-[102px] w-full md:mt-[70px] lg:mx-auto">
      <div className="mb-10 bg-red-10 px-4 py-12">
        <div className="mx-auto flex w-full flex-col px-2 md:justify-center lg:max-w-[1000px]">
          <h2 className="pb-4 font-bold text-l md:pb-12 md:text-2xl">
            맞춤 공고
          </h2>
          <CustomizedNoticeList notices={customizedNotices} />
        </div>
      </div>
      <div className="mx-auto flex w-full flex-col px-4 md:justify-center lg:max-w-[964px]">
        <h2 className="pb-4 font-bold text-l md:pb-12 md:text-2xl">
          전체 공고
        </h2>
        {/* <Filter></Filter> */}

        <AllNoiceList
          notices={allNotices}
          activePage={page}
          itemsCountPerPage={limit}
        />
      </div>
    </div>
  );
}
