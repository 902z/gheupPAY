"use client";
import React, { useEffect, useRef, useState } from "react";
import Pagination from "@/app/_components/pagination";
import { NoticeResponse } from "@/app/_apis/notice/response-type.js";
import NoticeCard from "../notice-card";
import Filter from "@/app/(route)/(alba)/notice-list/_components/filter";

type AllNoticeListProps = {
  notices: NoticeResponse;
  activePage: number;
  itemsCountPerPage: number;
  hourlyPayGte: number;
  startsAtGte: string | undefined;
  //일단 undefined 함께 둠
  address: string[];
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
    setShowFilter(!showFilter);
  };
  const handleCloseFilter = () => {
    setShowFilter(false);
  };
  const filterParams = {}

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
            {showFilter && <Filter onClose={handleCloseFilter} filterParams={filterParams} />}
            {/* 상세필터 버튼입니다 */}
          </div>
        </div>
        <div className="lg grid grid-cols-2 gap-4 lg:grid-cols-3">
          {noticeList &&
            noticeList.map((cardContents) => {
              return <NoticeCard cardContents={cardContents} />;
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
