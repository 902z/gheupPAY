"use client";
import { LinkButton } from "@/app/_components/button";
import errorImage from "@/public/images/404.png";
import Image from "next/image";
// 일단 에러 발생시 임시로 404 페이지 썼어요 나중에 수정해야 됨
export const metadata = {
  title: "오류 발생",
};
export default function NotFound() {
  return (
    <>
      <div className="base-container">
        <div className="mt-10 flex flex-col items-center justify-center">
          <Image alt="404" src={errorImage} width={600} />
          <h1 className="pt-4 font-bold text-2xl">오류가 발생했어요</h1>
          <p className="pb-4">다시 시도해주세요</p>
          <LinkButton
            href="/notice-list"
            btnColor="orange"
            className="w-fit px-12 md:px-20"
          >
            홈으로 가기
          </LinkButton>
        </div>
      </div>
    </>
  );
}
