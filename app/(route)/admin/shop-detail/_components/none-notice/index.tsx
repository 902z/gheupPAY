"use client";
import { LinkButton } from "@/app/_components/button";
import { usePathname, useSearchParams } from "next/navigation";
import React from "react";

type NoneNoticeProps = {
  shopId: string;
};

export default function NoneNotice({ shopId }: NoneNoticeProps) {
  const href = `/admin/notice-create/${shopId}`;
  return (
    <div className="flex max-w-[964px] flex-col items-center justify-center gap-6 rounded-xl border border-gray-20 py-[60px]">
      <p className="">공고를 등록해 보세요.</p>
      <LinkButton
        href={href}
        btnColor="orange"
        className="w-[108px] max-w-[346px] font-bold"
      >
        공고 등록하기
      </LinkButton>
    </div>
  );
}
