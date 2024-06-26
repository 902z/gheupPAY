"use client";
import ConfirmModal from "./_components/modals/confirm-modal";
import WarningModal from "./_components/modals/warning-modal";
import useModal from "./_hooks/useModal";

export default function Home() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      {/* <p className="font-bold" onClick={openModal}>
        confirm-modal
      </p>
      <ConfirmModal isOpen={isOpen} closeModal={closeModal}>
        확인 모달
      </ConfirmModal> */}

      <p className="font-bold" onClick={openModal}>
        warning-modal
      </p>
      <WarningModal isOpen={isOpen} closeModal={closeModal}>
        경고 모달
      </WarningModal>
    </>
  );
}
