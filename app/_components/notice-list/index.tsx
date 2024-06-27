"use client";
import React from "react";
import Pagination from "@/app/_components/pagination";
import { NoticeResponse } from "@/app/_apis/notice/response-type.js";
import NoticeCard from "../notice-card";

type AllNoticeListProps = {
  notices: NoticeResponse;
  activePage: number;
  itemsCountPerPage: number;
};

export default function AllNoiceList({
  notices,
  activePage,
  itemsCountPerPage,
}: AllNoticeListProps) {
  const noticeList = notices.items;
  const totalItemsCount = notices.count;

  return (
    <>
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
        />
      </div>
    </>
  );
}
