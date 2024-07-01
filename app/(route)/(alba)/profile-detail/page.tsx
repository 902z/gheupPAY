import React from "react";
import NoneApplication from "./_components/none-application";
export const metadata = {
  title: "프로필 상세",
};
export default function page() {
  return (
    <div className="base-container">
      <h2 className="py-8 font-bold text-l md:text-2xl">내 프로필</h2>
      <h2 className="py-8 font-bold text-l md:text-2xl">신청 내역</h2>
      <NoneApplication />
    </div>
  );
}
