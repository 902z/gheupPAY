import { LinkButton } from "@/app/_components/button";
import React from "react";

export default function NoneProfile() {
  return (
    <>
      <h2 className="my-8 font-bold text-l md:text-2xl">내 프로필</h2>
      <div className="flex flex-col items-center justify-center rounded-xl border border-gray-20 px-40 py-10 md:px-60">
        <p className="my-8 text-m">
          내 프로필을 등록하고 원하는 가게에 지원해 보세요.
        </p>
        <LinkButton
          href="/profile-register"
          btnColor="orange"
          className="font-bold"
        >
          내 프로필 등록하기
        </LinkButton>
      </div>
    </>
  );
}
