import React from "react";
import { motion, AnimatePresence } from "framer-motion";
import Button from "../../button";


type ModalProps = {
  closeModal: () => void;
  onClick?: () => void;
  children: React.ReactNode;
};

/**
 * 확인 Modal
 * @example
 *const { isOpen, openModal, closeModal } = useModal();
  if(isOpen)
*   <ConfirmModal 
      closeModal={closeModal} 
      onClick={()=>{console.log(버튼 클릭)})}
    >
      {modalContents}
    </ConfirmModal>
 * @property {boolean} onClick - 버튼 클릭시 동작 함수
 * @property {React.ReactNode} children - 모달 안에 들어갈 컨텐츠
 * @author 김보미 & 채종민
 */
export default function ConfirmModal({
  closeModal,
  children,
  onClick,
}: ModalProps) {
  const handleBtn = () => {
    closeModal();
    if (onClick) {
      onClick();
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
          <div className="flex items-center justify-center px-8 pt-16 text-ml">
            {children}
          </div>
          <div className="absolute bottom-0 left-0 right-0 mb-6 flex justify-center md:justify-end md:pr-6">
            <Button
              onClick={handleBtn}
              className="mx-24 flex h-[42px] items-center justify-center rounded-[8px] font-bold md:mx-0 md:h-[48px] md:w-[120px]"
              color="orange"
            >
              확인
            </Button>
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
