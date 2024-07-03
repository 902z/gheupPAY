"use client";
import React, { useState } from "react";
import { motion } from "framer-motion";
import { PutShopsShopIdNoticesNoticeIdApplicationsApplicationId } from "@/app/_apis/type";
import { putNoticeApplicationStatus } from "@/app/_apis/application";

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

  const statusState = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer rounded-md border-2 border-primary bg-white px-4 py-2 font-bold text-m text-primary"
              onClick={handleRejectClick}
            >
              거절하기
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer rounded-md border-2 border-blue-20 bg-white px-4 py-2 font-bold text-m text-blue-20"
              onClick={handleAcceptClick}
            >
              승인하기
            </motion.button>
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

  return <div>{statusState(currentStatus)}</div>;
}
