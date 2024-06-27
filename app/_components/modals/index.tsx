"use client";
import useModal from "@/app/_hooks/useModal";
import { Children } from "react";
import ConfirmModal from "./_components/confirm-modal";
import WarningModal from "./_components/warning-modal";
import SelectModal from "./_components/select-modal";

/**
 * ModalProps 인터페이스는 Modal 컴포넌트에서 받는 프롭스를 정의합니다.
 * @typedef {Object} ModalProps
 * @property {React.ReactNode} children - 모달 안에 렌더링할 콘텐츠입니다.
 * @property {"confirm" | "warning"} [type] - 모달의 타입: "confirm" 또는 "warning".
 * @property {"yes" | "approve" | "refuse" | "cancel"} [yesType] - SelectModal에서 사용할 확인 타입입니다.
 */

type ModalProps = {
  children: React.ReactNode;
  type?: "confirm" | "warning";
  yesType?: "yes" | "approve" | "refuse" | "cancel";
};

export default function Modal({ children, type, yesType }: ModalProps) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      {Children.map(children, (child, index) => (
        <section onClick={openModal} key={index}>
          {child}
        </section>
      ))}
      {isOpen &&
        (type === "confirm" ? (
          <ConfirmModal isOpen={isOpen} closeModal={closeModal}>
            {children}
          </ConfirmModal>
        ) : type === "warning" ? (
          <WarningModal isOpen={isOpen} closeModal={closeModal}>
            {children}
          </WarningModal>
        ) : (
          <SelectModal
            isOpen={isOpen}
            closeModal={closeModal}
            yesType={yesType as "yes" | "approve" | "refuse" | "cancel"}
          >
            {children}
          </SelectModal>
        ))}
    </>
  );
}
