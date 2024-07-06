"use client";

import { getShopNoticeDetail } from "@/app/_apis/shop";
import { postNotice } from "@/app/_util/notice";
import Link from "next/link";
import { useEffect } from "react";
interface PostNoticeButtonProps {
  children: React.ReactNode;
  shopId: string;
  noticeId: string;
}

export function PostNoticesButton({
  shopId,
  noticeId,
}: {
  shopId: string;
  noticeId: string;
}) {
  useEffect(() => {
    const fetchData = async () => {
      const data = await getShopNoticeDetail(shopId, noticeId);
      await postNotice(data.item);
    };
    fetchData();
  }, []);
  return <></>;
}

export function NoticeDetailedButton({
  children,
  shopId,
  noticeId,
}: PostNoticeButtonProps) {
  return <Link href={`/notice-detail/${shopId}/${noticeId}`}>{children}</Link>;
}

export function RedirectButton({
  children,
  shopId,
  noticeId,
}: {
  children: React.ReactNode;
  shopId: string;
  noticeId: string;
}) {
  return (
    <Link href={`/admin/notice-detail/${shopId}/${noticeId}`}>{children}</Link>
  );
}
