import { LinkButton } from "@/app/_components/button";
import React from "react";

export default function NoneApplication() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-20 px-40 py-10 md:px-60">
      <p className="my-8 text-m">아직 신청 내역이 없어요.</p>
      <LinkButton href="/notice-list" btnColor="orange" className="font-bold">
        공고 보러가기
      </LinkButton>
    </div>
  );
}
