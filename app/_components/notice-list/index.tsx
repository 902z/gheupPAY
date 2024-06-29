"use client";
import React, { useEffect, useRef } from "react";
import Pagination from "@/app/_components/pagination";
import NoticeCard from "../notice-card";
import { GetNotices } from "../../_apis/type/index";

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

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div>
      <div className="mx-auto flex w-full flex-col px-4 md:justify-center lg:max-w-[964px]">
        <h2
          className="pb-4 font-bold text-l md:pb-12 md:text-2xl"
          id={ALL_LIST_SECTION_ID}
        >
          전체 공고
        </h2>
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
