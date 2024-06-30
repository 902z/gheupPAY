"use client";

import { useEffect, useState } from "react";
import AlertList from "./alert-component";
import Image from "next/image";
import { AlertData } from "@/app/_apis/type";
import { getAlerts } from "@/app/_apis/alert";

interface AlertButtonProps {
  children: React.ReactNode;
}

interface InfiniteScrollProps {
  hasNext: boolean;
  limit: number;
  offset: number;
}

export default function AlertButton({ children }: AlertButtonProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [alerts, setAlerts] = useState<AlertData | null>(null);
  const [infiniteScroll, setInfiniteScroll] = useState<InfiniteScrollProps>({
    hasNext: false,
    limit: 10,
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

  const handleImpression = () => {
    const fetchData = async () => {
      try {
        const data = await getAlerts(
          infiniteScroll.offset,
          infiniteScroll.limit,
        );
        setAlerts(() => data);
      } catch (e) {
        console.error(e);
        throw Error("알림을 불러오는데 실패했습니다.");
      }
    };
    fetchData();
  };

  useEffect(() => {
    if (isOpen === false) return;
    const fetchData = async () => {
      try {
        const data = await getAlerts();
        setAlerts(() => data);
      } catch (e) {
        console.error(e);
        throw Error("알림을 불러오는데 실패했습니다.");
      }
    };
    fetchData();
  }, [isOpen]);

  return (
    <section className="relative w-[fit-content]">
      <button onClick={handleOpen}>{children}</button>
      {isOpen && alerts !== null && (
        <div className="fixed inset-0 z-30 rounded-none bg-red-10 px-5 py-10 md:absolute md:inset-auto md:right-0 md:top-[32.5px] md:h-[419px] md:w-[368px] md:rounded-[10px] md:px-5 md:py-6">
          <div className="h-full">
            <header className="mb-4 flex justify-between font-bold text-[20px]">
              알림 {alerts?.count || 0}개
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
            <AlertList alerts={alerts.items} onImpression={handleImpression} />
          </div>
        </div>
      )}
    </section>
  );
}
