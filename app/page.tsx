"use client";
import Modal from "./_components/modal";
import useModal from "./_hooks/useModal";

export default function Home() {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <p className="font-bold" onClick={openModal}>
        모달test
      </p>
      <Modal isOpen={isOpen} closeModal={closeModal}>
        <p>악악</p>
      </Modal>
    </>
  );
}
