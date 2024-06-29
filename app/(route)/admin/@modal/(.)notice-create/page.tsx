"use client";
import CustomTextarea from "@/app/_components/custom-textarea";
import { useRouter } from "next/navigation";
import React, { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
export default function AddNotice() {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const { register } = useForm();
  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }

  return createPortal(
    <div>
      <dialog ref={dialogRef}>
        <button onClick={onDismiss}>닫기</button>
        <form>
          {" "}
          <CustomTextarea
            label="공고 설명"
            placeholder="공고 설명을 입력해 주세요"
            register={register("description")}
          />
        </form>
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
