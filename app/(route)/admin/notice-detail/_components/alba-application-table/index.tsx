import { GetShopsShopIdNoticesNoticeIdApplications } from "@/app/_apis/type";
import React from "react";
import StatusLabel from "../status-label";

type AlbaApplicationTableProps = {
  applicationList: GetShopsShopIdNoticesNoticeIdApplications;
};

export default function AlbaApplicationTable({
  applicationList,
}: AlbaApplicationTableProps) {
  return (
    <>
      <div className="overflow-auto rounded-xl shadow-md">
        <table className="w-full table-auto border-collapse border-spacing-0 border-gray-20">
          <thead>
            <tr className="border bg-red-10 text-left">
              <th className="sticky left-0 z-10 min-w-[80px] border bg-red-10 p-4">
                신청자
              </th>
              <th className="min-w-full border bg-red-10 p-4">소개</th>
              <th className="min-w-full border bg-red-10 p-4">전화번호</th>
              <th className="w-max min-w-[230px] border bg-red-10 p-4">상태</th>
            </tr>
          </thead>
          <tbody>
            {applicationList.items.map((application, index) => (
              <tr key={index}>
                <td className="mix-w-[200px] sticky left-0 z-10 border bg-white p-4">
                  {application.item.user.item.name}
                </td>
                <td className="min-w-[250px] border bg-white p-4">
                  {application.item.user.item.bio}
                </td>
                <td className="min-w-[200px] border bg-white p-4">
                  {application.item.user.item.phone}
                </td>
                <td className="border bg-white p-4">
                  <StatusLabel status={application.item.status} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
}
