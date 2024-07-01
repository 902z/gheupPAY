"use client";
import useModal from "@/app/_hooks/use-modal";
import ConfirmModal from "./_components/confirm-modal";
import WarningModal from "./_components/warning-modal";
import SelectModal from "./_components/select-modal";
import WindowModal from "./_components/window-modal";

type ConfirmOnly = {
  confirm: true;
  onClick?: () => void;
  warning?: never;
  select?: never;
  selectType?: never;
  onClickYes?: never;
  onClickNo?: never;
};

type WarningOnly = {
  confirm?: never;
  warning: true;
  onClick?: () => void;
  select?: never;
  selectType?: never;
  onClickYes?: never;
  onClickNo?: never;
};

type SelectOnly = {
  confirm?: never;
  warning?: never;
  select: true;
  selectType: "yes" | "approve" | "refuse" | "cancel";
  onClickYes?: () => void;
  onClickNo?: () => void;
  onClick?: never;
};

type OpenModalProps = {
  children: React.ReactNode;
  modalContents: React.ReactNode | string;
} & (ConfirmOnly | WarningOnly | SelectOnly);

/**
 * 
 * 모달 여는 컴포넌트
 * @example
 * <OpenModal
    select
    selectType="yes"
    modalContents="하실건요?"
    onClickYes={() => {
      console.log("예스 버튼 클릭");
    }}
    onClickNo={() => {
      console.log("아니요 버튼 클릭");
    }}
  >
    <button>물어보기</button>
  </OpenModal>
  <OpenModal
    confirm
    modalContents="할게요!"
    onClick={() => {
      console.log("버튼 클릭");
    }}
    >
    <button>확인하기</button>
  </OpenModal>

  <OpenModal
    warning
    modalContents="클나!"
    onClick={() => {
      console.log("버튼 클릭");
    }}
  >

  * @param {boolean} modalType confirm warning select 중 하나 선택
  *  select 선택했으면 selectType 필수
  * @param {onClick} onClick 버튼 누르면 실행할 동작, select는 onClickYes onClickNo로 줍니다.
  * @param {ReactNode|string} modalContents 모달 안에 들어갈 내용
  * @author ☯️채종민 extends 김보미
 */

export default function OpenModal({
  children,
  confirm,
  warning,
  select,
  selectType,
  modalContents,
  onClick,
  onClickYes,
  onClickNo,
}: OpenModalProps) {
  const { isOpen, openModal, closeModal } = useModal();

  return (
    <>
      <section onClick={openModal}>{children}</section>

      {isOpen && confirm && (
        <ConfirmModal closeModal={closeModal} onClick={onClick}>
          {modalContents}
        </ConfirmModal>
      )}
      {isOpen && warning && (
        <WarningModal closeModal={closeModal} onClick={onClick}>
          {modalContents}
        </WarningModal>
      )}
      {isOpen && select && (
        <SelectModal
          closeModal={closeModal}
          yesType={selectType}
          onClickYes={onClickYes}
          onClickNo={onClickNo}
        >
          {modalContents}
        </SelectModal>
      )}
    </>
  );
}
