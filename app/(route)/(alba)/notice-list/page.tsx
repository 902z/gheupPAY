import React from "react";
import CustomizedNoticeList from "./_components/customized-notice";
import { getAllNotices, getCustomizedNotices } from "@/app/_apis/notice";
import AllNoticeList from "@/app/_components/notice-list";
import { getCookie } from "@/app/_util/cookie";
import { getUser } from "@/app/_apis/user";
import Image from "next/image";
import bluredCustomeDesktop from "@/public/images/blured-custome-desktop.png";
import bluredCustomeMobile from "@/public/images/blured-custome-mobile.png";
import { LinkButton } from "@/app/_components/button";

interface SearchParamsProps {
  searchParams: {
    page: string;
    wage?: string;
    startDate?: string;
    address?: string[];
    keyword?: string;
  };
}

export default async function page({ searchParams }: SearchParamsProps) {
  const token = await getCookie("accessToken");
  const hasAddress = await getCookie("address");
  const customizedNotices = token ? await getCustomizedNotices({}) : null;
  const hourlyPayGte = parseInt((searchParams.wage ?? "0").replace(/,/g, ""));
  const startsAtGte =
    searchParams.startDate && new Date(searchParams.startDate).toISOString();
  const keyword = searchParams.keyword;

  const address = searchParams.address || [];
  const page = parseInt(searchParams.page || "1", 10);
  const limit = 6;
  const offset = (page - 1) * limit;

  const allNotices = await getAllNotices({
    offset,
    limit,
    address,
    hourlyPayGte,
    startsAtGte,
    keyword,
  });

  const allNoticeListClassName = keyword ? "pt-12" : "";

  const bgClass = token&&hasAddress ? "bg-red-10" : "bg-[#b3a5a2]";

  return (
    <div className="mt-[102px] w-full md:mt-[70px] lg:mx-auto">
      {!keyword && (
        <div className={`mb-10 ${bgClass} px-4 py-10`}>
          <div className="mx-auto flex w-full flex-col px-2 md:justify-center lg:max-w-[1000px]">
            <h2 className="pb-4 font-bold text-l md:pb-8 md:text-2xl">
              맞춤 공고
            </h2>
            {token ? (
              hasAddress ? (
                <CustomizedNoticeList notices={customizedNotices} />
              ) : (
                <div className="relative">
                  <div className="md:hidden">
                    <Image
                      src={bluredCustomeMobile}
                      alt="프로필 등록시 사용 가능한 서비스입니다."
                      priority
                      sizes="100% 100%"
                      className="rounded-2xl"
                    />
                  </div>
                  <div className="hidden md:block">
                    <Image
                      src={bluredCustomeDesktop}
                      alt="프로필 등록시 사용 가능한 서비스입니다."
                      priority
                      sizes="100% 100%"
                      className="rounded-2xl"
                    />
                  </div>
                  <p className="absolute bottom-[50%] right-[50%] translate-x-1/2 text-center font-bold text-l text-gray-5 md:pb-12 md:text-xl">
                    프로필 등록 후 이용 가능한
                    <br />
                    알바님 맞춤 서비스입니다!
                  </p>
                  <div className="absolute right-[50%] top-[50%] w-60 translate-x-1/2">
                    <LinkButton
                      href={"/profile-register"}
                      className="w-10 text-l"
                      btnColor="orange"
                    >
                      프로필 등록 하러 가기
                    </LinkButton>
                  </div>
                </div>
              )
            ) : (
              <div className="relative">
                <div className="md:hidden">
                  <Image
                    src={bluredCustomeMobile}
                    alt="로그인시 사용 가능한 서비스입니다."
                    priority
                    sizes="100% 100%"
                    className="rounded-2xl"
                  />
                </div>
                <div className="hidden md:block">
                  <Image
                    src={bluredCustomeDesktop}
                    alt="로그인시 사용 가능한 서비스입니다."
                    priority
                    sizes="100% 100%"
                    className="rounded-2xl"
                  />
                </div>
                <p className="absolute bottom-[50%] right-[50%] translate-x-1/2 text-center font-bold text-l text-gray-5 md:pb-12 md:text-xl">
                  로그인 후 이용 가능한
                  <br />
                  사용자 맞춤 서비스입니다!
                </p>
                <div className="absolute right-[50%] top-[50%] w-60 translate-x-1/2">
                  <LinkButton
                    href={"/login"}
                    className="w-10 text-l"
                    btnColor="orange"
                  >
                    로그인 하러 가기
                  </LinkButton>
                </div>
              </div>
            )}
          </div>
        </div>
      )}
      <div className={allNoticeListClassName}>
        <AllNoticeList
          notices={allNotices}
          activePage={page}
          itemsCountPerPage={limit}
          keyword={keyword}
        />
      </div>
    </div>
  );
}
