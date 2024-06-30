import Image from "next/image";
import close from "@/public/icons/close.png";

/**
 *
 * 제목이랑 닫기버튼 있는 헤더
 * 넓이는 100%
 * @example
 *<TitleX onClick={() => router.back()}>가게 등록하기</TitleX>
 * @author ☯️채종민
 * @param {string} children 제목
 * @param {onClick} onClick X 버튼 눌렀을 때 함수
 */

function TitleX({
  children,
  onClick,
}: {
  children: React.ReactNode;
  onClick: () => void;
}) {
  return (
    <header className="h- flex w-full justify-between">
      <h2 className="font-bold text-l leading-[25px]">{children}</h2>
      <div
        className="relative h-6 w-6 cursor-pointer md:h-8 md:w-8"
        onClick={onClick}
      >
        <Image src={close} alt="닫기 버튼" fill priority />
      </div>
    </header>
  );
}

export default TitleX;
