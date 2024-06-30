import React from "react";
import CustomizedNoticeList from "./_components/customized-notice";
import { getAllNotices, getCustomizedNotices } from "@/app/_apis/notice";
import AllNoticeList from "@/app/_components/notice-list";

interface SearchParamsProps {
  searchParams: {
    page: string;
    wage?: string;
    startDate?: string;
    address?: string[];
  };
}

export default async function page({ searchParams }: SearchParamsProps) {
  const customizedNotices = await getCustomizedNotices({});
  const hourlyPayGte = parseInt((searchParams.wage ?? "0").replace(/,/g, ''));

  let startsAtGte;
  if (searchParams.startDate) {
    const date = new Date(searchParams.startDate);
    if (!isNaN(date.getTime())) {
      // 날짜가 유효한지 확인
      const now = new Date();
      if (date < now) {
        // 과거 시간이라면 현재 시간으로 설정
        startsAtGte = now.toISOString();
      } else {
        // 유효한 미래 시간이라면 그대로 사용
        startsAtGte = date.toISOString();
      }
    }
  }

  // const startsAtGte = searchParams.startDate ?? "";


  const address = searchParams.address || [];
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 6;
  const offset = (page - 1) * limit;
  const addressString = Array.isArray(address) ? address.join(",") : address || "";

  console.log("hourlyPayGte:", hourlyPayGte);
  console.log("address:", address);
  console.log("startsAtGte:", startsAtGte)

  const allNotices = await getAllNotices({ offset, limit, address: addressString, hourlyPayGte, startsAtGte });

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

      <AllNoticeList
        notices={allNotices}
        activePage={page}
        itemsCountPerPage={limit}
        hourlyPayGte = {hourlyPayGte}
        startsAtGte={startsAtGte}
        address={address}
      />
    </div>
  );
}
