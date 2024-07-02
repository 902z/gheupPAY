"use client";
import React, { useEffect, useRef, useState } from "react";
import Pagination from "@/app/_components/pagination";
import NoticeCard from "../notice-card";
import { GetNotices } from "../../_apis/type/index";
import { NoticeCardSkeleton } from "../notice-card/skeleton";
import Filter from "@/app/(route)/(alba)/notice-list/_components/filter";
import { useSearchParams } from "next/navigation";

type AllNoticeListProps = {
  notices: GetNotices;
  activePage: number;
  itemsCountPerPage: number;
};

const ALL_LIST_SECTION_ID = "all-list-section";

export default function AllNoticeList({
  notices,
  activePage,
  itemsCountPerPage,
}: AllNoticeListProps) {
  const noticeList = notices.items;
  const totalItemsCount = notices.count;
  const [showFilter, setShowFilter] = useState(false);

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  const handleOpenFilter = () => {
    setShowFilter((prevShowFilter) => !prevShowFilter);
  };
  
  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  return (
    <div>
      <div className="mx-auto flex w-full flex-col px-4 md:justify-center lg:max-w-[964px]">
        <div className="flex justify-between">
          <h2
            className="pb-4 font-bold text-l md:pb-12 md:text-2xl"
            id={ALL_LIST_SECTION_ID}
          >
            전체 공고
          </h2>
          {/* 상세필터 버튼입니다 */}
          <div className="relative">
            <button
              className="h-[30px] rounded-[5px] bg-red-30 px-[12px] font-bold text-m text-white"
              onClick={handleOpenFilter}
            >
              <p>상세필터</p>
            </button>
            {showFilter && (
              <Filter onClose={handleCloseFilter}/>
            )}
            {/* 상세필터 버튼입니다 */}
          </div>
        </div>
        <div className="lg grid grid-cols-2 gap-4 lg:grid-cols-3">
          {noticeList
            ? noticeList.map((cardContents) => {
                return <NoticeCard cardContents={cardContents.item} />;
              })
            : [1, 2, 3, 4, 5, 6].map((index) => {
                return <NoticeCardSkeleton key={index} />;
              })}
        </div>
        <div className="mb-[60px] mt-10">
          <Pagination
            activePage={activePage}
            totalItemsCount={totalItemsCount}
            itemsCountPerPage={itemsCountPerPage}
            focusHash={ALL_LIST_SECTION_ID}
          />
        </div>
      </div>
    </div>
  );
}
