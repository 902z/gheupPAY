"use client";
import React, { useEffect, useRef, useState, useCallback } from "react";
import Pagination from "@/app/_components/pagination";
import NoticeCard from "../notice-card";
import { GetNotices } from "../../_apis/type/index";
import { NoticeCardSkeleton } from "../notice-card/_component/skeleton";
import Filter from "@/app/(route)/(alba)/notice-list/_components/filter";
import { useSearchParams, useRouter } from "next/navigation";
import SortDropDown from "./_component/sort-drop-down";
import { NoticeDetailedButton } from "../action-button";
import useOutsideClick from '@/app/_hooks/use-outside-click';

type AllNoticeListProps = {
  notices: GetNotices;
  activePage: number;
  itemsCountPerPage: number;
  keyword?: string;
  sort: string;
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
  const filterRef = useRef<HTMLDivElement | null>(null);
  const searchKeyword = useSearchParams().get("keyword");
  const searchParams = useSearchParams();
  const [sortValue, setSortValue] = useState("time");
  const router = useRouter();

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

  const handleSortSubmit = useCallback((sortValue: string) => {
    const searchParams = new URLSearchParams(window.location.search);
    searchParams.set("sort", sortValue);
    router.push(`?${searchParams.toString()}`);
    setSortValue(sortValue);
  }, []);

  useEffect(() => {
    setSortValue("time");
  }, [searchParams.get("keyword")]);

  useEffect(() => {
    useOutsideClick;
  }, [showFilter]);

  return (
    <div>
      <section className="mx-auto flex w-full flex-col px-4 md:justify-center lg:max-w-[964px]">
        <div className="justify-between md:flex">
          <h2
            className="pb-2 font-bold text-l md:pb-4 md:text-2xl"
            id={ALL_LIST_SECTION_ID}
          >
            {searchKeyword ? (
              <span>
                <span className="text-primary">{searchKeyword}</span>
                {"에 대한 공고 목록"}
              </span>
            ) : (
              "전체 공고"
            )}
          </h2>

          <div className="flex gap-4">
            <SortDropDown onSelect={handleSortSubmit} defaultValue="time" />

            {/* 상세필터 버튼입니다 */}
            <div className="relative" ref={filterRef}>
              <button
                className="h-[30px] rounded-[5px] bg-red-30 px-[12px] font-bold text-m text-white"
                onClick={handleOpenFilter}
              >
                <p>상세필터</p>
              </button>
              {showFilter && <Filter onClose={handleCloseFilter} />}
              {/* 상세필터 버튼입니다 */}
            </div>
          </div>
        </div>
        <div className="lg grid grid-cols-2 gap-4 lg:grid-cols-3">
          {noticeList
            ? noticeList.map((cardContents) => {
                return (
                  <NoticeDetailedButton
                    noticeId={cardContents.item.id}
                    shopId={cardContents.item.shop.item.id}
                    key={cardContents.item.id}
                  >
                    <NoticeCard
                      address1={cardContents.item.shop.item.address1}
                      closed={cardContents.item.closed}
                      hourlyPay={cardContents.item.hourlyPay}
                      noticeId={cardContents.item.id}
                      content={cardContents.item}
                      imageUrl={cardContents.item.shop.item.imageUrl}
                      name={cardContents.item.shop.item.name}
                      startsAt={cardContents.item.startsAt}
                      workhour={cardContents.item.workhour}
                    />
                  </NoticeDetailedButton>
                );
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
      </section>
    </div>
  );
}
