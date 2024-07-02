import { GetShopsShopIdNoticesNoticeId } from "@/app/_apis/type";
import React from "react";

type StatusLabelProps = {
  status: GetShopsShopIdNoticesNoticeId["item"]["currentUserApplication"]["item"]["status"];
};

const statusStateMap: Record<string, React.ReactNode> = {
  pending: (
    <div className="inline rounded-full bg-green-10 px-3 py-2 font-bold text-m text-green-20">
      대기중
    </div>
  ),
  accepted: (
    <div className="inline rounded-full bg-blue-10 px-3 py-2 font-bold text-m text-blue-20">
      승인 완료
    </div>
  ),
  rejected: (
    <div className="inline rounded-full bg-red-10 px-3 py-2 font-bold text-m text-primary">
      거절
    </div>
  ),
  canceled: (
    <div className="inline rounded-full bg-red-10 px-3 py-2 font-bold text-m text-primary">
      취소
    </div>
  ),
};

export default function AlbaStatusLabel({ status }: StatusLabelProps) {
  return <div>{statusStateMap[status] ?? <div>오류</div>}</div>;
}
