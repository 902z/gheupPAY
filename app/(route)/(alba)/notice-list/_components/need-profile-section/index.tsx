import Image from "next/image";
import React from "react";
import bluredCustomeDesktop from "@/public/images/blured-custome-desktop.png";
import bluredCustomeMobile from "@/public/images/blured-custome-mobile.png";
import { LinkButton } from "@/app/_components/button";

export default function NeedProfileSection() {
  return (
    <div className="relative">
      <div className="md:hidden">
        <Image
          src={bluredCustomeMobile}
          alt="프로필 등록시 사용 가능한 서비스입니다."
          priority
          sizes="100% 100%"
          className="rounded-2xl"
        />
      </div>
      <div className="hidden md:block">
        <Image
          src={bluredCustomeDesktop}
          alt="프로필 등록시 사용 가능한 서비스입니다."
          priority
          sizes="100% 100%"
          className="rounded-2xl"
        />
      </div>
      <p className="absolute bottom-[50%] right-[50%] translate-x-1/2 text-center font-bold text-l text-gray-5 md:pb-12 md:text-xl">
        프로필 등록 후 이용 가능한
        <br />
        알바님 맞춤 서비스입니다!
      </p>
      <div className="absolute right-[50%] top-[50%] w-60 translate-x-1/2">
        <LinkButton
          href={"/profile-register"}
          className="w-10 text-l"
          btnColor="orange"
        >
          프로필 등록 하러 가기
        </LinkButton>
      </div>
    </div>
  );
}
