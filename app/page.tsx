import Link from "next/link";

export default function Home() {
  return (
    <>
      <div className="base-container text-center">
        <Link href="/announce-list">리스트 페이지로 이동</Link>
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
