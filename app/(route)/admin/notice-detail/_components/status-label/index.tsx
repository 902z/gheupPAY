"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PutShopsShopIdNoticesNoticeIdApplicationsApplicationId } from "@/app/_apis/type";
import { putNoticeApplicationStatus } from "@/app/_apis/application";
import OpenModal from "@/app/_components/modals";

type StatusLabelProps = {
  status: "pending" | "accepted" | "rejected" | "canceled";
  noticeId: PutShopsShopIdNoticesNoticeIdApplicationsApplicationId["item"]["notice"]["item"]["id"];
  shopId: PutShopsShopIdNoticesNoticeIdApplicationsApplicationId["item"]["shop"]["item"]["id"];
  applicationId: PutShopsShopIdNoticesNoticeIdApplicationsApplicationId["item"]["id"];
};

export default function StatusLabel({
  status,
  shopId,
  noticeId,
  applicationId,
}: StatusLabelProps) {
  const [currentStatus, setCurrentStatus] = useState(status);

  const updateStatus = async (status: "accepted" | "rejected") => {
    const newStatus = await putNoticeApplicationStatus(
      shopId,
      noticeId,
      applicationId,
      status,
    );
    setCurrentStatus(newStatus.item.status);
  };

  const handleRejectClick = () => {
    updateStatus("rejected");
  };

  const handleAcceptClick = () => {
    updateStatus("accepted");
  };

  const statusStateMap: Record<string, React.ReactNode> = {
    pending: (
      <div className="flex justify-center gap-4">
        <OpenModal
          select
          selectType="refuse"
          modalContents="거절하시겠습니까?"
          onClickYes={handleRejectClick}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer rounded-md border-2 border-primary bg-white px-4 py-2 font-bold text-m text-primary"
          >
            거절하기
          </motion.button>
        </OpenModal>
        <OpenModal
          select
          selectType="approve"
          modalContents="거절하시겠습니까?"
          onClickYes={handleAcceptClick}
        >
          <motion.button
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="cursor-pointer rounded-md border-2 border-blue-20 bg-white px-4 py-2 font-bold text-m text-blue-20"
          >
            승인하기
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
