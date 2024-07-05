"use client";

import { useCallback, useRef, useState } from "react";
import AlertList from "./alert-component";
import Image from "next/image";
import { getUsersUserIdAlerts } from "@/app/_apis/type";
import { getAlerts } from "@/app/_apis/alert";
import { isAxiosError } from "axios";
import useOutsideClick from "@/app/_hooks/use-outside-click";

interface AlertButtonProps {
  initialAlerts: getUsersUserIdAlerts;
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
  const [alerts, setAlerts] = useState<getUsersUserIdAlerts["items"]>(
    initialAlerts.items,
  );
  const [alertConfig, setAlertConfig] = useState<InfiniteScrollProps>({
    hasNext: initialAlerts.hasNext,
    offset: initialAlerts.offset + 6,
  });
  const alertRef = useRef<HTMLDivElement>(null);
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
    if (isOpen) {
      setIsOpen((prev) => !prev);
      document.body.className = "overflow-auto";
    }
  };

  useOutsideClick({ ref: alertRef, handler: handleClose });

  const deleteData = (id: string) => {
    setAlerts(() => alerts.filter((value) => value.item.id !== id));
  };

  const fetchData = useCallback(async () => {
    if (!alertConfig.hasNext) return;
    try {
      const { items, hasNext } = await getAlerts();
      setAlerts((prev) => [...prev, ...items]);
      setAlertConfig((prev) => ({
        hasNext,
        offset: prev.offset + 6,
      }));
    } catch (e) {
      if (isAxiosError(e)) {
        console.error(e.message);
      } else {
        console.error(e);
        throw Error("알림을 불러오는데 오류가 발생했습니다.");
      }
    }
  }, [alertConfig]);

  return (
    <section className="relative w-[fit-content]" ref={alertRef}>
      <button onClick={handleOpen}>{children}</button>
      {isOpen && (
        <div className="fixed inset-0 z-30 rounded-none bg-red-10 px-5 py-10 md:absolute md:inset-auto md:right-0 md:top-[32.5px] md:h-[419px] md:w-[368px] md:rounded-[10px] md:border md:border-[#CBC9CF] md:px-5 md:py-6 md:shadow-md">
          <div className="h-full">
            <header className="mb-4 flex justify-between font-bold text-[20px]">
              <div className="flex flex-col md:ml-2">
                <span>알림 {initialAlerts.count || 0}개</span>
                <span className="text-sm text-gray-50">
                  오른쪽으로 밀거나 클릭해서 읽음 처리해주세요!
                </span>
              </div>
              <button className="mb-6 block md:hidden" onClick={handleClose}>
                <Image
                  src="/icons/close.png"
                  width={24}
                  height={24}
                  alt="알림 닫기"
                  priority
                />
              </button>
            </header>
            <AlertList
              alerts={alerts}
              onImpression={fetchData}
              onDelete={deleteData}
            />
          </div>
        </div>
      )}
    </section>
  );
}
