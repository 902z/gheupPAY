import React from "react";

export default function AlbaApplicationTable() {
  return (
    <div className="relative overflow-auto rounded-xl shadow-md">
      <table className="w-full table-fixed overflow-auto rounded-xl border border-gray-20">
        <tr className="border bg-red-10 text-left">
          <th className="sticky left-0 top-0 border p-4">신청자</th>
          <th className="border p-4">소개</th>
          <th className="border p-4">전화번호</th>
          <th className="border p-4">상태</th>
        </tr>
        <tr>
          <td className="sticky left-0 top-0 border p-4">김강현</td>
          <td className="border p-4">김강현</td>
          <td className="border p-4">김강현</td>
          <td className="bordear p-4">김강현</td>
        </tr>
      </table>
    </div>
  );
}
