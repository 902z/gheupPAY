import React from "react";
import NoneApplication from "./_components/none-application";
import { getUser } from "@/app/_apis/user";
import UserProfile from "./_components/user-profile";
export const metadata = {
  title: "프로필 상세",
};
export default async function page() {
  const userId = "309aaf62-068e-4deb-a6c3-a31abacfdc67";
  const userProfile = await getUser(userId);

  return (
    <div className="base-container">
      <div className="flex flex-col justify-start gap-5 lg:flex-row lg:items-start lg:justify-start lg:gap-60">
        <h2 className="font-bold text-l md:text-2xl">내 프로필</h2>
        <div className="flex-1">
          <UserProfile userProfile={userProfile} />
        </div>
      </div>
      <h2 className="py-8 font-bold text-l md:text-2xl">신청 내역</h2>
      {/* <NoneApplication /> */}
    </div>
  );
}
