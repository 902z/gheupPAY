"use client";
import useModal from "@/app/_hooks/useModal";
import ConfirmModal from "./confirm-modal";
import WarningModal from "./warning-modal";
import SelectModal from "./select-modal";
import WindowModal from "./window-modal";

type ConfirmOnly = {
  confirm: true;
  warning?: never;
  select?: never;
  selectType?: never;
  windowTitle?: never;
  window?: never;
};

type WarningOnly = {
  confirm?: never;
  warning: true;
  select?: never;
  selectType?: never;
  windowTitle?: never;
  window?: never;
};

type SelectOnly = {
  confirm?: never;
  warning?: never;
  select: true;
  selectType: "yes" | "approve" | "refuse" | "cancel";
  window?: never;
  windowTitle?: never;
};

type WindowOnly = {
  confirm?: never;
  warning?: never;
  select?: never;
  selectType?: never;
  window: true;
  windowTitle: string;
};

type OpenModalProps = {
  children: React.ReactNode;
  modalContents: React.ReactNode | string;
} & (ConfirmOnly | WarningOnly | SelectOnly | WindowOnly);

/**
 * 
 * 모달 여는 컴포넌트
 * @example
 *<OpenModal
        window
        windowTitle="가게 등록"
        modalContents={<ShopRegisterForm />}
      >
        <button>가게 정보 등록하기</button>
  </OpenModal>

  <OpenModal select selectType="yes" modalContents="하실건요?">
      <button>물어보기</button>
  </OpenModal>

  <OpenModal confirm modalContents="할게요!">
      <button>확인하기</button>
  </OpenModal>

  <OpenModal confirm modalContents="클나!">
      <button>경고하기</button>
  </OpenModal>

  * @param {boolean} modalType confirm warning select window 중 하나 선택
  *  select 선탣했으면 selectType 필수 window 선택했으면 windowTitle 필수
  * @param {ReactNode|string} modalContents 모달 안에 들어갈 내용
 * @author ☯️채종민 extends 김보미미
 */

export default function OpenModal({
  children,
  confirm,
  warning,
  select,
  selectType,
  window,
  windowTitle,
  modalContents,
}: OpenModalProps) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section onClick={openModal}>{children}</section>

      {isOpen && confirm && (
        <ConfirmModal isOpen={isOpen} closeModal={closeModal}>
          {modalContents}
        </ConfirmModal>
      )}
      {isOpen && warning && (
        <WarningModal isOpen={isOpen} closeModal={closeModal}>
          {modalContents}
        </WarningModal>
      )}
      {isOpen && select && (
        <SelectModal
          isOpen={isOpen}
          closeModal={closeModal}
          yesType={selectType}
        >
          {modalContents}
        </SelectModal>
      )}
      {isOpen && window && (
        <WindowModal title={windowTitle} onclick={closeModal}>
          {modalContents}
        </WindowModal>
      )}
    </>
  );
}
