"use client";
import React from "react";
import { motion } from "framer-motion";
import { GetShopsShopIdNoticesNoticeId } from "@/app/_apis/type";

type StatusLabelProps = {
  status: GetShopsShopIdNoticesNoticeId["item"]["currentUserApplication"]["item"]["status"];
};

export default function StatusLabel({ status }: StatusLabelProps) {
  const statusState = (status: string) => {
    switch (status) {
      case "pending":
        return (
          <div className="flex justify-center gap-4">
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer rounded-md border-2 border-primary bg-white px-4 py-2 font-bold text-m text-primary"
            >
              거절하기
            </motion.button>
            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="cursor-pointer rounded-md border-2 border-blue-20 bg-white px-4 py-2 font-bold text-m text-blue-20"
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

  return <div>{statusState(status)}</div>;
}
