"use client";
import {
  GetShopsShopIdNoticesNoticeId,
  PutShopsShopIdNoticesNoticeIdApplicationsApplicationId,
} from "@/app/_apis/type";
import React, { useState } from "react";
import { motion } from "framer-motion";
import OpenModal from "@/app/_components/modals";
import { putNoticeApplicationStatus } from "@/app/_apis/application";

type StatusLabelProps = {
  status: "pending" | "accepted" | "rejected" | "canceled";
  noticeId: PutShopsShopIdNoticesNoticeIdApplicationsApplicationId["item"]["notice"]["item"]["id"];
  shopId: PutShopsShopIdNoticesNoticeIdApplicationsApplicationId["item"]["shop"]["item"]["id"];
  applicationId: PutShopsShopIdNoticesNoticeIdApplicationsApplicationId["item"]["id"];
};

export default function AlbaStatusLabel({
  shopId,
  noticeId,
  applicationId,
  status,
}: StatusLabelProps) {
  const [currentStatus, setCurrentStatus] = useState(status);

  const updateStatus = async (status: "canceled") => {
    const newStatus = await putNoticeApplicationStatus(
      shopId,
      noticeId,
      applicationId,
      status,
    );
    setCurrentStatus(newStatus.item.status);
  };

  const handleCancelClick = () => {
    updateStatus("canceled");
  };

  const statusStateMap: Record<string, React.ReactNode> = {
    pending: (
      <div className="flex justify-center gap-4">
        <div className="flex items-center rounded-full bg-green-10 px-3 py-2 font-bold text-m text-green-20">
          대기중
        </div>
        <OpenModal
          select
          selectType="cancel"
          modalContents="취소하시겠습니까?"
          onClickYes={handleCancelClick}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer rounded-md border-2 border-primary bg-white px-4 py-2 font-bold text-m text-primary"
          >
            취소하기
          </motion.button>
        </OpenModal>
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

  return <div>{statusStateMap[currentStatus] ?? <div>오류</div>}</div>;
}
