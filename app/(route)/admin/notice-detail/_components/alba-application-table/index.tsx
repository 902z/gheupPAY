import { Application } from "@/app/_apis/type";
import React from "react";
import StatusLabel from "../status-label";

type AlbaApplicationTableProps = {
  applicationList: Application;
};

export default function AlbaApplicationTable({
  applicationList,
}: AlbaApplicationTableProps) {
  return (
    <>
      <div className="relative overflow-auto rounded-xl shadow-md">
        <table className="w-full table-fixed overflow-auto rounded-xl border border-gray-20">
          <thead>
            <tr className="border bg-red-10 text-left">
              <th className="sticky left-0 top-0 border p-4">신청자</th>
              <th className="border p-4">소개</th>
              <th className="border p-4">전화번호</th>
              <th className="border p-4">상태</th>
            </tr>
          </thead>
          <tbody>
            {applicationList.items.map((application, index) => (
              <tr key={index}>
                <td className="border p-4">{application.item.user.name}</td>
                <td className="border p-4">{application.item.user.bio}</td>
                <td className="border p-4">{application.item.user.phone}</td>
                <td className="border p-4">{application.item.status}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <StatusLabel />
    </>
  );
}
