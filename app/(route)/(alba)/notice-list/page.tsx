import React from "react";
import CustomizedNoticeList from "./_components/customized-notice";
import { getAllNotices, getCustomizedNotices } from "@/app/_apis/notice";
import AllNoticeList from "@/app/_components/notice-list";
import { getCookie } from "@/app/_util/cookie";
import { GetNotices } from "@/app/_apis/type";
import NeedLoginSection from "./_components/need-login-section";
import NeedProfileSection from "./_components/need-profile-section";

interface SearchParamsProps {
  searchParams: {
    page: string;
    wage?: string;
    startDate?: string;
    address?: string[];
    keyword?: string;
    sort: string;
  };
}

export default async function page({ searchParams }: SearchParamsProps) {
  const token = await getCookie("accessToken");
  const hasAddress = await getCookie("address");
  const type = await getCookie("type");

  const customizedNotices =
    token && hasAddress ? await getCustomizedNotices(hasAddress) : null;

  const hourlyPayGte = parseInt((searchParams.wage ?? "0").replace(/,/g, ""));
  const startsAtGte =
    searchParams.startDate && new Date(searchParams.startDate).toISOString();
  const keyword = searchParams.keyword;

  const address = searchParams.address || [];
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 6;
  const offset = (page - 1) * limit;

  const sort = searchParams.sort || "time";

  const allNotices = await getAllNotices({
    offset,
    limit,
    address,
    hourlyPayGte,
    startsAtGte,
    keyword,
    sort,
  });

  const isEmployer = type === "employer";

  let payNotices: GetNotices;
  // 맞춤 공고가 없을 경우 시급 높은 순으로 정렬된 공고를 가져오기
  if (!customizedNotices || customizedNotices.items.length === 0) {
    payNotices = await getAllNotices({
      offset: 0,
      limit: 5,
      sort: "pay",
    });
  }

  const allNoticeListClassName = keyword ? "pt-12" : "";
  const bgClass = token && hasAddress ? "bg-red-10" : "bg-[#b3a5a2]";

  const renderCustomizedNoticesSection = () => {
    if (!token) {
      return <NeedLoginSection />;
    }

    if (!hasAddress) {
      return <NeedProfileSection />;
    }

    if (customizedNotices && customizedNotices.items.length > 0) {
      return <CustomizedNoticeList notices={customizedNotices} />;
    }
    return (
      <div>
        <CustomizedNoticeList notices={payNotices} />
        <p className="pl-4 text-s text-gray-600">
          *주소 기반 맞춤 공고가 없을 시 시급이 높은 순으로 공고가 나옵니다.
        </p>
      </div>
    );
  };

  return (
    <div className="mt-[102px] w-full md:mt-[70px] lg:mx-auto">
      {!keyword && (
        <section className={`mb-10 ${bgClass} px-4 py-10`}>
          <div className="mx-auto flex w-full flex-col px-2 md:justify-center lg:max-w-[1000px]">
            <h2 className="font-bold text-l md:px-3 md:pb-2 md:text-2xl">
              맞춤 공고
            </h2>
            {renderCustomizedNoticesSection()}
          </div>
        </section>
      )}
      <div className={allNoticeListClassName}>
        <AllNoticeList
          notices={allNotices}
          activePage={page}
          itemsCountPerPage={limit}
          keyword={keyword}
          sort={sort}
          isEmployer={isEmployer}
        />
      </div>
    </div>
  );
}
