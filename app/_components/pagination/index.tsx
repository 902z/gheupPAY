"use client";
import React from "react";
import Link from "next/link";
import arrowLeft from "@/public/icons/arrow-left.png";
import arrowRight from "@/public/icons/arrow-right.png";
import arrowLeftDisabled from "@/public/icons/arrow-left-disabled.png";
import Image from "next/image";
import { usePathname, useSearchParams } from "next/navigation";

type PageNationProps = {
  pageRangeDisplayed?: number;
  totalItemsCount: number;
  itemsCountPerPage: number;
  activePage: number;
  focusHash?: string;
};

export default function Pagination({
  focusHash,
  pageRangeDisplayed = 7,
  totalItemsCount,
  itemsCountPerPage,
  activePage,
}: PageNationProps) {
  const pathname = usePathname();
  const searchParams = useSearchParams();

  const createPageURL = (page: number) => {
    const params = new URLSearchParams(searchParams);
    params.set("page", page.toString());
    return `${pathname}?${params.toString()}#${focusHash}`;
  };

  const totalPage = Math.ceil(totalItemsCount / itemsCountPerPage);

  const nextPage = totalPage < activePage + 1 ? activePage : activePage + 1;

  const prevPage = activePage > 1 ? activePage - 1 : 1;

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

  const isContent = totalItemsCount > 0;

  return (
    <div className="flex justify-center gap-[2px] text-m">
      {isContent ? (
        <Link
          className={`${activePage === 1 ? "pointer-events-none" : ""} flex h-10 w-10 items-center justify-center`}
          href={createPageURL(prevPage)}
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
      ) : null}

      {paginationList.map((page) => (
        <Link
          className={` ${activePage === page ? "bg-red-30 text-white" : ""} flex h-10 w-10 items-center justify-center rounded-sm hover:bg-red-10 hover:text-black`}
          key={page}
          href={createPageURL(page)}
        >
          {page}
        </Link>
      ))}
      {endPage !== totalPage ? (
        <Link
          className="flex h-10 w-10 items-center justify-center"
          href={createPageURL(nextPage)}
        >
          <Image src={arrowRight} alt="arrow-right" />
        </Link>
      ) : null}
    </div>
  );
}
