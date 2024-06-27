import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../button";
import check from "@/public/icons/check.png";
import Image from "next/image";

/**
 * ModalProps 타입 정의
 * @typedef {Object} ModalProps
 * @property {boolean} isOpen - 모달이 열려 있는지 여부를 나타내는 상태
 * @property {() => void} closeModal - 모달을 닫기 위한 함수
 * @property {React.ReactNode} children - 모달 내부에 렌더링할 콘텐츠
 * @property {"yes" | "approve" | "refuse" | "cancel"} yesType - 예 버튼에 표시할 텍스트의 키
 * @author 김보미
 */

type ModalProps = {
  isOpen: boolean;
  closeModal: () => void;
  children: React.ReactNode;
  yesType: "yes" | "approve" | "refuse" | "cancel";
};

const YES_TYPE = {
  yes: "예",
  approve: "승인하기",
  refuse: "거절하기",
  cancel: "취소하기 ",
};

export default function SelectModal({
  isOpen,
  closeModal,
  children,
  yesType,
}: ModalProps) {
  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
          className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
          onClick={closeModal} // 밖에 클릭시 모달 닫음
        >
          {/* stopPropagation: 모달 내부 클릭 시 모달이 닫히는 이슈 해결해줌(모달 내부를 클릭하면 이벤트 전파를 막음) */}
          <motion.div
            className="relative flex h-[220px] w-full max-w-[327px] flex-col rounded-lg bg-white p-4 shadow-lg md:max-w-[540px]"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center justify-center py-6">
              <Image src={check} alt="선택" width={24} height={24} />
            </div>
            <div className="flex items-center justify-center px-8 text-ml">
              {children}
            </div>
            <div className="absolute bottom-0 left-0 right-0 mb-6 flex justify-center gap-3 px-14 md:px-0">
              <Button
                onClick={closeModal}
                className="flex h-[42px] items-center justify-center rounded-[8px] font-bold md:h-[48px] md:w-[120px]"
                color="white"
              >
                아니오
              </Button>
              <Button
                onClick={closeModal}
                className="flex h-[42px] items-center justify-center rounded-[8px] font-bold md:h-[48px] md:w-[120px]"
                color="orange"
              >
                {YES_TYPE[yesType]}
              </Button>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
