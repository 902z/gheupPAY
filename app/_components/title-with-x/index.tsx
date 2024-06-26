import Image from "next/image";
import close from "@/public/icons/close.png";

/**
 *
 * 제목이랑 닫기버튼 있는 헤더
 * 넓이는 100%
 * @example
 *<TitleX>가게 등록</TitleX>
 * @author ☯️채종민
 * @param {string} children 제목
 */

function TitleX({ children }: { children: React.ReactNode }) {
  return (
    <header className="h- flex w-full justify-between">
      <h2 className="font-bold text-l leading-[25px]">{children}</h2>
      <div className="relative h-6 w-6 md:h-8 md:w-8">
        <Image src={close} alt="닫기 버튼" fill priority />
      </div>
    </header>
  );
}

export default TitleX;
