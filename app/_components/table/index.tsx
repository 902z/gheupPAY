"use client";
import {
  GetShopsShopIdNoticesNoticeIdApplications,
  GetUsersUserIdApplications,
} from "@/app/_apis/type";
import React, { useEffect } from "react";
import Pagination from "@/app/_components/pagination";

type TableProps = {
  items: GetShopsShopIdNoticesNoticeIdApplications | GetUsersUserIdApplications;
  columns: {
    header: string;
    tds: (item: any) => React.ReactNode;
    className?: string;
    width?: string;
  }[];
  activePage: number;
  itemsCountPerPage: number;
};

const APPLICATION_LIST_ID = "application-list";

export default function Table({
  items,
  columns,
  activePage,
  itemsCountPerPage,
}: TableProps) {
  const totalItemsCount = items.count;

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);
  return (
    <div id={APPLICATION_LIST_ID} className="rounded-xl shadow-md">
      <div className="overflow-auto rounded-t-xl">
        <table className="w-full table-auto border-collapse border-spacing-0 rounded-xl border-gray-20">
          <thead>
            <tr className="border bg-red-10 text-left">
              {columns.map((column, index) => (
                <th
                  key={index}
                  className={`${index === 0 ? "sticky left-0 z-10" : ""} border bg-red-10 p-4 ${column.className || ""}`}
                  style={{ minWidth: column.width }}
                >
                  {column.header}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {items.items.map((item, index) => (
              <tr key={index}>
                {columns.map((column, colIndex) => (
                  <td
                    key={colIndex}
                    className={`border bg-white p-4 ${colIndex === 0 ? "sticky left-0 z-10" : ""} ${column.className || ""}`}
                    style={{ minWidth: column.width }}
                  >
                    {column.tds(item)}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className="py-2">
        <Pagination
          activePage={activePage}
          totalItemsCount={totalItemsCount}
          itemsCountPerPage={itemsCountPerPage}
          focusHash={APPLICATION_LIST_ID}
        />
      </div>
    </div>
  );
}
