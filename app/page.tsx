"use client";
import Link from "next/link";
import OpenModal from "./_components/modals/";
import ShopRegisterForm from "./_components/shop-register/";

export default function Home() {
  return (
    <>
      <div className="base-container flex flex-col text-center">
        <Link href="/notice-list">리스트 페이지로 이동</Link>
        <h1 className="font-bold">
          폰트를 굵게 하고 싶으면 font-bold를 쓰세요.
        </h1>
        <p>기본은 regular입니다. (기본은 설정 X)</p>
        <p className="text-s">s: 12px</p>
        <p className="text-m">m: 14px</p>
        <p>base: 16px (기본은 설정 X)</p>
        <p className="text-l">l: 20px</p>
        <p className="text-xl">xl: 28px</p>
        <Link href="/admin/shop-register" className="text-link">
          가게 정보 등록 페이지
        </Link>
        <span className="text-red">VS</span>
        <OpenModal
          window
          windowTitle="가게 등록"
          modalContents={<ShopRegisterForm />}
        >
          <button className="text-link">가게 정보 등록 모달</button>
        </OpenModal>
        <OpenModal select selectType="yes" modalContents="하실건요?">
          <button>물어보기</button>
        </OpenModal>

        <OpenModal confirm modalContents="할게요!">
          <button>확인하기</button>
        </OpenModal>

        <OpenModal warning modalContents="클나!">
          <button>경고하기</button>
        </OpenModal>
      </div>
    </>
  );
}
