import Link from "next/link";
import Modal from "./_components/modals";
import OpenModal from "./_components/modals/_components/open-modal";
import ShopRegisterForm from "./_components/shop-register/";

export default function Home() {
  return (
    <>
      <Modal type="confirm">confirm</Modal>
      <Modal type="warning">warning</Modal>
      <Modal type="warning">warning</Modal>
      <Modal type="warning">warning</Modal>
      <Modal type="warning">warning</Modal>
      <Modal yesType="yes">select</Modal>

      <OpenModal
        window
        windowTitle="가게 등록"
        modalContents={<ShopRegisterForm />}
      >
        <button>가게 정보 등록하기</button>
      </OpenModal>
      <OpenModal select selectType="yes" modalContents="하실건요?">
        <button>물어보기</button>
      </OpenModal>

      <OpenModal confirm modalContents="할게요!">
        <button>확인하기</button>
      </OpenModal>

      <OpenModal confirm modalContents="클나!">
        <button>경고하기</button>
      </OpenModal>
      <div className="base-container flex flex-col text-center">
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
        <Link href="/admin/shop-register" className="text-link">
          가게 정보 등록
        </Link>
        <Link href="/login" className="text-link">
          로그인
        </Link>
      </div>
    </>
  );
}
