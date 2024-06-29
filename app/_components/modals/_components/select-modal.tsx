import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../button";
import check from "@/public/icons/check.png";
import Image from "next/image";


type ModalProps = {
  closeModal: () => void;
  children: React.ReactNode;
  yesType: "yes" | "approve" | "refuse" | "cancel";
  onClickYes?: () => void;
  onClickNo?: () => void;
};

const YES_TYPE = {
  yes: "예",
  approve: "승인하기",
  refuse: "거절하기",
  cancel: "취소하기 ",
};
/**
 * 예 아니요 Select Modal
 * @example
 *const { isOpen, openModal, closeModal } = useModal();
  if(isOpen)
*   <SelectModal
      closeModal={closeModal}
      yesType="yes"
      onClickYes={()=>{console.log( yes버튼 클릭)})}
      onClickNo={()=>{console.log( yes버튼 클릭)})}
    >
    {modalContents}
  </SelectModal>
 * @property {boolean} onClickYes - yes 버튼 클릭시 동작 함수
 * @property {() => void} onClickNo - no 버튼 클릭시 동작 함수
 * @property {closeModal} closeModal - useModal()의 closeModal
 * @property {React.ReactNode} children - 모달 안에 들어갈 컨텐츠
 * @property {"yes" | "approve" | "refuse" | "cancel"} yesType - 예 버튼에 표시할 텍스트의 키
 * @author 김보미 & 채종민
 */

export default function SelectModal({
  closeModal,
  children,
  yesType,
  onClickYes,
  onClickNo,
}: ModalProps) {
  const handleYesBtn = () => {
    closeModal();
    if (onClickYes) {
      onClickYes();
    }
  };
  const handleNoBtn = () => {
    closeModal();
    if (onClickNo) {
      onClickNo();
    }
  };
  return (
    <AnimatePresence>
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.3 }}
        className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50"
        onClick={closeModal} // 밖에 클릭시 모달 닫음
      >
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
              onClick={handleNoBtn}
              className="flex h-[42px] items-center justify-center rounded-[8px] font-bold md:h-[48px] md:w-[120px]"
              color="white"
            >
              아니오
            </Button>
            <Button
              onClick={handleYesBtn}
              className="flex h-[42px] items-center justify-center rounded-[8px] font-bold md:h-[48px] md:w-[120px]"
              color="orange"
            >
              {YES_TYPE[yesType]}
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
