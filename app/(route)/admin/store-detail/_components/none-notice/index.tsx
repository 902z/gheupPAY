import { LinkButton } from "@/app/_components/button";
import React from "react";

export default function NoneNotice() {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-20 px-40 py-10">
      <p className="my-8 text-m">공고를 등록해 보세요.</p>
      <LinkButton href="/store-register" color="orange" className="font-bold">
        공고 등록하기
      </LinkButton>
    </div>
  );
}
