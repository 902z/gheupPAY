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
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-20 px-40 py-10 md:px-60">
      <p className="my-8 text-m">공고를 등록해 보세요.</p>
      <LinkButton href={href} color="orange" className="font-bold">
        공고 등록하기
      </LinkButton>
    </div>
  );
}
