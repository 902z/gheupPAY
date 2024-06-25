import { useState } from "react";

/**
 * 모달 상태를 관리하는 커스텀 훅
 *
 * @returns {Object} 모달 상태와 모달을 열고 닫는 함수들을 반환합니다.
 * @returns {boolean} isOpen - 모달이 열려 있는지 여부를 나타내는 상태
 * @returns {() => void} openModal - 모달을 여는 함수
 * @returns {() => void} closeModal - 모달을 닫는 함수
 * @author 김보미
 */

export default function useModal() {
  const [isOpen, setIsOpen] = useState(false);

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  return {
    isOpen,
    openModal,
    closeModal,
  };
}
