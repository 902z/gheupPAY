"use client";

import { useState } from "react";
import AlertList from "./alert-component";
import Image from "next/image";
import { AlertData } from "@/app/_apis/type";
import { getAlerts } from "@/app/_apis/alert";
import { isAxiosError } from "axios";

interface AlertButtonProps {
  initialAlerts: AlertData;
  children: React.ReactNode;
}

interface InfiniteScrollProps {
  hasNext: boolean;
  offset: number;
}

export default function AlertButton({
  children,
  initialAlerts,
}: AlertButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [alerts, setAlerts] = useState<AlertData["items"]>(initialAlerts.items);
  const [alertConfig, setAlertConfig] = useState<InfiniteScrollProps>({
    hasNext: true,
    offset: 0,
  });

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

  const fetchData = async () => {
    if (!alertConfig.hasNext) return;
    try {
      const { items, hasNext, offset } = await getAlerts();
      setAlerts((prev) => [...prev, ...items]);
      setAlertConfig(() => ({
        hasNext,
        offset: offset + 10,
      }));
    } catch (e) {
      if (isAxiosError(e)) {
        console.error(e.message);
      } else {
        console.error(e);
        throw Error("알림을 불러오는데 오류가 발생했습니다.");
      }
    }
  };

  return (
    <section className="relative w-[fit-content]">
      <button onClick={handleOpen}>{children}</button>
      {isOpen && (
        <div className="fixed inset-0 z-30 rounded-none bg-red-10 px-5 py-10 md:absolute md:inset-auto md:right-0 md:top-[32.5px] md:h-[419px] md:w-[368px] md:rounded-[10px] md:px-5 md:py-6">
          <div className="h-full">
            <header className="mb-4 flex justify-between font-bold text-[20px]">
              알림 {initialAlerts.count || 0}개
              <button className="block md:hidden" onClick={handleClose}>
                <Image
                  src="/icons/close.png"
                  width={24}
                  height={24}
                  alt="알림 닫기"
                  priority
                />
              </button>
            </header>
            <AlertList alerts={alerts} onImpression={fetchData} />
          </div>
        </div>
      )}
    </section>
  );
}
