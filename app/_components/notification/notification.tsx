import Image from "next/image";
import { DATA } from "./mockdata";

interface AlarmProps {
  onClick: () => void;
}

export default function Alarm({ onClick }: AlarmProps) {
  return (
    <section className="fixed inset-0 z-30 rounded-none bg-red-10 px-5 py-10 md:absolute md:inset-auto md:right-0 md:top-[32.5px] md:h-[419px] md:w-[368px] md:rounded-[10px] md:px-5 md:py-6">
      <section className="h-full">
        <header className="mb-4 flex justify-between font-bold text-[20px]">
          알림 {DATA.count}개
          <button className="block md:hidden" onClick={onClick}>
            <Image
              src="/icons/close.png"
              width={24}
              height={24}
              alt="알림 닫기"
              priority
            />
          </button>
        </header>
        <ul className="h-[calc(100%-46px)] overflow-auto">
          {DATA.items.map((item) => {
            return (
              <li className="mb-2 flex h-[105px] w-full flex-col items-start gap-2 rounded-[5px] bg-white px-3 py-4">
                {item?.item.result === "accepted" ? (
                  <Image
                    src="/icons/alert-allowed.png"
                    width={5}
                    height={5}
                    alt="accepted"
                    priority
                    className="mb-1"
                  />
                ) : (
                  <Image
                    src="/icons/alert-rejected.png"
                    width={5}
                    height={5}
                    alt="rejected"
                    priority
                    className="mb-1"
                  />
                )}
                <p className="text-start text-sm font-normal">
                  {item?.item.shop.item.name}({item?.item.notice.item.workhour}){" "}
                  공고 지원이{" "}
                  {item?.item.result === "accepted" ? (
                    <span className="text-blue-20">승인</span>
                  ) : (
                    <span className="text-red-40">거절</span>
                  )}
                  되었어요.
                </p>
                <p className="text-[12px] text-gray-500">
                  {item?.item.createdAt}
                </p>
              </li>
            );
          })}
        </ul>
      </section>
    </section>
  );
}
