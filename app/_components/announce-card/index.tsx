"use client";
import React from "react";

import "swiper/css";
import { NoticesResponse } from "@/app/_types/response-type";
import NoticeCard from "../notice-card.tsx";
import Pagination from "@/app/_components/pagination";

type AnnounceListProps = {
  notices: NoticesResponse;
  activePage: number;
  itemsCountPerPage: number;
};

export default function AnnounceList({
  notices,
  activePage,
  itemsCountPerPage,
}: AnnounceListProps) {
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
          pathname="/announce-list"
        />
      </div>
    </>
  );
}
