"use client";
import React from "react";
import Link from "next/link";
import arrowLeft from "@/public/icons/arrow-left.png";
import arrowRight from "@/public/icons/arrow-right.png";
import arrowLeftDisabled from "@/public/icons/arrow-left-disabled.png";
import Image from "next/image";

type PageNationProps = {
  onChange?: (page: number) => void;
  pageRangeDisplayed?: number;
  totalItemsCount: number;
  itemsCountPerPage: number;
  activePage: number;
  pathname: string;
};

export default function Pagination({
  onChange,
  pageRangeDisplayed = 7,
  totalItemsCount,
  itemsCountPerPage,
  activePage,
  pathname,
}: PageNationProps) {
  const nextPage =
    Math.ceil(totalItemsCount / itemsCountPerPage) < activePage + 1
      ? activePage
      : activePage + 1;

  const prevPage = activePage > 1 ? activePage - 1 : 1;

  const totalPage = Math.ceil(totalItemsCount / itemsCountPerPage);
  const midPoint = Math.floor(pageRangeDisplayed / 2);

  const startPage = Math.max(
    1,
    Math.min(activePage - midPoint, totalPage - pageRangeDisplayed + 1),
  );

  const endPage = Math.min(
    totalPage,
    Math.max(activePage + midPoint, pageRangeDisplayed),
  );

  const paginationList = Array.from(
    { length: endPage - startPage + 1 },
    (_, i) => startPage + i,
  );

  return (
    <div className="flex justify-center gap-[2px] text-m">
      <Link
        className={`${activePage === 1 ? "pointer-events-none" : ""} flex h-10 w-10 items-center justify-center`}
        href={{ pathname: `${pathname}`, query: { page: prevPage } }}
      >
        {activePage === 1 ? (
          <Image
            src={arrowLeftDisabled}
            alt="arrow-left"
            width={20}
            height={20}
          />
        ) : (
          <Image src={arrowLeft} alt="arrow-left" width={20} height={20} />
        )}
      </Link>
      {paginationList.map((page) => (
        <Link
          className={` ${activePage === page ? "bg-red-30 text-white" : ""} flex h-10 w-10 items-center justify-center rounded-sm`}
          key={page}
          href={{ pathname: `${pathname}`, query: { page: page } }}
        >
          {page}
        </Link>
      ))}
      {endPage !== totalPage ? (
        <Link
          className="flex h-10 w-10 items-center justify-center"
          href={{ pathname: `${pathname}`, query: { page: nextPage } }}
        >
          <Image src={arrowRight} alt="arrow-right" />
        </Link>
      ) : null}
    </div>
  );
}
