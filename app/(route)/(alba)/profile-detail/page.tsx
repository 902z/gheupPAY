import React from "react";
import NoneApplication from "./_components/none-application";
import { getUser } from "@/app/_apis/user";
import UserProfile from "./_components/user-profile";
import { getUserNoticeApplication } from "@/app/_apis/application";
import NoticeApplicationTable from "./_components/notice-application-table";
import { getCookie } from "@/app/_util/cookie";
import NoneProfile from "./_components/none-profile";

export const metadata = {
  title: "프로필 상세",
};

type PageProps = {
  searchParams: {
    page?: string;
  };
};

export default async function Page({ searchParams }: PageProps) {
  const userId = await getCookie("userId");

  if (!userId) {
    return null;
  }

  const page = parseInt(searchParams.page || "1", 10);
  const limit = 10;
  const offset = (page - 1) * limit;

  const userProfile = await getUser(userId);

  const applicationNotice = await getUserNoticeApplication(
    userId,
    offset,
    limit,
  );

  return (
    <div className="base-container">
      {!userProfile.item.address ? (
        <NoneProfile />
      ) : (
        <>
          <div className="flex flex-col justify-start gap-5 lg:flex-row lg:items-start lg:justify-start lg:gap-60">
            <h2 className="font-bold text-l md:text-2xl">내 프로필</h2>
            <div className="flex-1">
              <UserProfile userProfile={userProfile} />
            </div>
          </div>
          <h2 className="py-8 font-bold text-l md:text-2xl">신청 내역</h2>
          {applicationNotice && applicationNotice.items.length > 0 ? (
            <NoticeApplicationTable
              applicationNotice={applicationNotice}
              activePage={page}
              itemsCountPerPage={limit}
            />
          ) : (
            <NoneApplication />
          )}
        </>
      )}
    </div>
  );
}
