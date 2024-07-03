"use client";
import { UserApplication } from "@/app/_apis/type";
import React, { useEffect } from "react";
import AlbaStatusLabel from "../alba-status-label";
import { calculateTimeRange } from "@/app/_util/calculate-time-range";
import { dateFormat } from "@/app/_util/date-format";
import formattedNumber from "@/app/_util/number-format";
import Pagination from "@/app/_components/pagination";

type NoticeApplicationTableProps = {
  applicationNotice: UserApplication;
  activePage: number;
  itemsCountPerPage: number;
};

const APPLICATION_LIST_ID = "application-list";

export default function NoticeApplicationTable({
  applicationNotice,
  activePage,
  itemsCountPerPage,
}: NoticeApplicationTableProps) {
  const totalItemsCount = applicationNotice.count;

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <div id={APPLICATION_LIST_ID}>
      <div className="overflow-auto rounded-xl shadow-md">
        <table className="w-full table-auto border-collapse border-spacing-0 border-gray-20">
          <thead>
            <tr className="border bg-red-10 text-left">
              <th className="sticky left-0 z-10 min-w-[150px] border bg-red-10 p-4">
                가게
              </th>
              <th className="min-w-full border bg-red-10 p-4">일자</th>
              <th className="min-w-full border bg-red-10 p-4">시급 </th>
              <th className="w-max min-w-[230px] border bg-red-10 p-4">상태</th>
            </tr>
          </thead>
          <tbody>
            {applicationNotice.items.map((application, index) => (
              <tr key={index}>
                <td className="mix-w-[200px] sticky left-0 z-10 border bg-white p-4">
                  {application.item.shop.item.name}
                </td>
                <td className="min-w-[300px] border bg-white p-4">
                  {dateFormat(application.item.notice.item.startsAt)}{" "}
                  {calculateTimeRange(
                    application.item.notice.item.startsAt,
                    application.item.notice.item.workhour,
                  )}{" "}
                  ({application.item.notice.item.workhour}시간)
                </td>
                <td className="min-w-[150px] border bg-white p-4">
                  {formattedNumber(
                    application.item.shop.item.originalHourlyPay,
                  )}{" "}
                  원
                </td>
                <td className="border bg-white p-4">
                  <AlbaStatusLabel status={application.item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <div className="my-2">
          <Pagination
            activePage={activePage}
            totalItemsCount={totalItemsCount}
            itemsCountPerPage={itemsCountPerPage}
            focusHash={APPLICATION_LIST_ID}
          />
        </div>
      </div>
    </div>
  );
}
