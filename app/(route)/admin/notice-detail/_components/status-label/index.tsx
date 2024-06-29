"use client";
import React from "react";
import { motion } from "framer-motion";

export default function StatusLabel() {
  return (
    <div>
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

      <div className="inline rounded-full bg-red-10 px-3 py-2 font-bold text-m text-primary">
        거절
      </div>
      <div className="inline rounded-full bg-blue-10 px-3 py-2 font-bold text-m text-blue-20">
        승인 완료
      </div>
    </div>
  );
}
