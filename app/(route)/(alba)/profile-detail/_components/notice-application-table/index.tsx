"use client";
import { GetUsersUserIdApplications } from "@/app/_apis/type";
import React from "react";
import AlbaStatusLabel from "../alba-status-label";
import { calculateTimeRange } from "@/app/_util/calculate-time-range";
import { dateFormat } from "@/app/_util/date-format";
import formattedNumber from "@/app/_util/number-format";
import Table from "@/app/_components/table";

type NoticeApplicationTableProps = {
  applicationNotice: GetUsersUserIdApplications;
  activePage: number;
  itemsCountPerPage: number;
};

type Column = {
  header: string;
  tds: (application: GetUsersUserIdApplications["items"][0]) => React.ReactNode;
  width: string;
};

const columns: Column[] = [
  {
    header: "가게",
    tds: (application) => application.item.shop.item.name,
    width: "200px",
  },
  {
    header: "일자",
    tds: (application) =>
      `${dateFormat(application.item.notice.item.startsAt)} ${calculateTimeRange(
        application.item.notice.item.startsAt,
        application.item.notice.item.workhour,
      )} (${application.item.notice.item.workhour}시간)`,
    width: "300px",
  },
  {
    header: "시급",
    tds: (application) =>
      `${formattedNumber(application.item.shop.item.originalHourlyPay)} 원`,
    width: "150px",
  },
  {
    header: "상태",
    tds: (application) => (
      <AlbaStatusLabel
        status={application.item.status}
        applicationId={application.item.id}
        shopId={application.item.shop.item.id}
        noticeId={application.item.notice.item.id}
      />
    ),
    width: "230px",
  },
];

export default function NoticeApplicationTable({
  applicationNotice,
  activePage,
  itemsCountPerPage,
}: NoticeApplicationTableProps) {
  return (
    <Table
      items={applicationNotice}
      columns={columns}
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
    />
  );
}
