"use client";
import React from "react";
import CreateNoticeForm from "./_components";
import PageModal from "@/app/_components/page-modal";
export default function AddNotice() {
  return (
    <PageModal title="공고 등록">
      <CreateNoticeForm />
    </PageModal>
  );
}
