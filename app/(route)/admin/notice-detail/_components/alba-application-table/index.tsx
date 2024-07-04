"use client";
"use client";
import { GetShopsShopIdNoticesNoticeIdApplications } from "@/app/_apis/type";
import React, { useEffect } from "react";
import StatusLabel from "../status-label";
import Table from "@/app/_components/table";

type AlbaApplicationTableProps = {
  applicationList: GetShopsShopIdNoticesNoticeIdApplications;
  activePage: number;
  itemsCountPerPage: number;
};

type Column = {
  header: string;
  tds: (
    application: GetShopsShopIdNoticesNoticeIdApplications["items"][0],
  ) => React.ReactNode;
  width: string;
};

const columns: Column[] = [
  {
    header: "신청자",
    tds: (application) => application.item.user.item.name,
    width: "200px",
  },
  {
    header: "소개",
    tds: (application) => application.item.user.item.bio,
    width: "250px",
  },
  {
    header: "전화번호",
    tds: (application) => application.item.user.item.phone,
    width: "200px",
  },
  {
    header: "상태",
    tds: (application) => (
      <StatusLabel
        status={application.item.status}
        applicationId={application.item.id}
        shopId={application.item.shop.item.id}
        noticeId={application.item.notice.item.id}
      />
    ),
    width: "230px",
  },
];

export default function AlbaApplicationTable({
  applicationList,
  activePage,
  itemsCountPerPage,
}: AlbaApplicationTableProps) {
  const totalItemsCount = applicationList.count;

  useEffect(() => {
    if (window.location.hash) {
      const element = document.querySelector(window.location.hash);
      if (element) {
        element.scrollIntoView({ behavior: "smooth" });
      }
    }
  }, []);

  return (
    <Table
      items={applicationList}
      columns={columns}
      activePage={activePage}
      itemsCountPerPage={itemsCountPerPage}
    />
  );
}
