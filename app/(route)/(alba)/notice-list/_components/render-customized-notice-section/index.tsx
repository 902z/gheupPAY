import { getCookie } from "@/app/_util/cookie";
import React from "react";
import CustomizedNoticeList from "../customized-notice";
import NeedLoginSection from "../need-login-section";
import NeedProfileSection from "../need-profile-section";
import { GetNotices } from "@/app/_apis/type";

type RenderCustomizedNoticesSectionProps = {
  customizedNotices: GetNotices | null;
  payNotices: GetNotices;
};

export default async function RenderCustomizedNoticesSection(
  customizedNotices,
  payNotices,
): RenderCustomizedNoticesSectionProps {
  const token = await getCookie("accessToken");
  const hasAddress = await getCookie("address");
  if (!token) {
    return <NeedLoginSection />;
  }

  if (!hasAddress) {
    return <NeedProfileSection />;
  }

  if (customizedNotices && customizedNotices.items.length > 0) {
    return <CustomizedNoticeList notices={customizedNotices} />;
  }
  return (
    <div>
      <CustomizedNoticeList notices={payNotices} />
      <p className="pl-4 text-s text-gray-600">
        *주소 기반 맞춤 공고가 없을 시 시급이 높은 순으로 공고가 나옵니다.
      </p>
    </div>
  );
}
