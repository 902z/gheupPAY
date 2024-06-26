import Image from "next/image";
import Alarm from "./_components/notification";

export default function Home() {
  return (
    <>
      <div className="flex flex-col items-center text-center">
        <Alarm>
          <p className="h-6 w-6">
            <Image
              src="/icons/noti-active.png"
              alt="알람 버튼"
              width={24}
              height={24}
            />
          </p>
        </Alarm>
        <h1 className="font-bold">
          폰트를 굵게 하고 싶으면 font-bold를 쓰세요.
        </h1>
        <p>기본은 regular입니다. (기본은 설정 X)</p>
        <p className="text-s">s: 12px</p>
        <p className="text-m">m: 14px</p>
        <p>base: 16px (기본은 설정 X)</p>
        <p className="text-l">l: 20px</p>
        <p className="text-xl">xl: 28px</p>
      </div>
    </>
  );
}
