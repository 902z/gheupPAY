import { GetShopsShopIdNoticesNoticeId } from "@/app/_apis/type";
import React from "react";

type StatusLabelProps = {
  status: GetShopsShopIdNoticesNoticeId["item"]["currentUserApplication"]["item"]["status"];
};

export default function AlbaStatusLabel({ status }: StatusLabelProps) {
  const statusState = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <div className="inline rounded-full bg-green-10 px-3 py-2 font-bold text-m text-green-20">
            대기중
          </div>
        );
      case "accepted":
        return (
          <div className="inline rounded-full bg-blue-10 px-3 py-2 font-bold text-m text-blue-20">
            승인 완료
          </div>
        );
      case "rejected":
        return (
          <div className="inline rounded-full bg-red-10 px-3 py-2 font-bold text-m text-primary">
            거절
          </div>
        );
      case "canceled":
        return (
          <div className="inline rounded-full bg-red-10 px-3 py-2 font-bold text-m text-primary">
            취소
          </div>
        );
      default:
        return <div>오류</div>;
    }
  };

  return <div>{statusState(status)}</div>;
}
