"use client";

import { useState } from "react";
import Alarm from "./notification";

interface NotificationButtonProps {
  children: React.ReactNode;
}

export default function NotificationButton({
  children,
}: NotificationButtonProps) {
  const [isOpen, setIsOpen] = useState(false);

  // 모바일 : 모달 열리면 > 스크롤 제거, 모달 닫히면 > 스크롤 생성
  // 테블릿 이상 : 모달 열리든 닫히든 스크롤 유지
  const handleOpen = () => {
    if (!isOpen) {
      setIsOpen((prev) => !prev);
      document.body.className = "overflow-hidden md:overflow-auto";
    } else {
      setIsOpen((prev) => !prev);
      document.body.className = "overflow-auto";
    }
  };

  const handleClose = () => {
    setIsOpen((prev) => !prev);
    document.body.className = "overflow-auto";
  };

  return (
    <section className="relative w-[fit-content]">
      <button onClick={handleOpen}>{children}</button>
      {isOpen && <Alarm onClick={handleClose} />}
    </section>
  );
}
