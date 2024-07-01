"use client";
import CustomPriceInput from "@/app/_components/custom-price-input";
import CustomTextarea from "@/app/_components/custom-textarea";
import CustomTimeInput from "@/app/_components/custom-time-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { ElementRef, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import { storeNoticeRegisterSchema } from "./schema";
import CustomDateInput from "@/app/_components/custom-date-input";
import Button from "@/app/_components/button";
export default function AddNotice() {
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);
  const resolver = yupResolver(storeNoticeRegisterSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver, mode: "onSubmit" });

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  function onDismiss() {
    router.back();
  }
  const onSubmit = (data: any) => {
    console.log(data);
  };

  return createPortal(
    <div className="justify-conter fixed inset-0 flex items-center">
      <dialog
        ref={dialogRef}
        className="m-0 h-full max-h-none w-full max-w-none"
      >
        <div className="p-3 md:p-8">
          <div className="mb-6 flex justify-between">
            <h1 className="font-bold text-l">공고 등록</h1>
            <button onClick={onDismiss}>닫기</button>
          </div>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="flex flex-col gap-6">
              <div className="flex flex-col gap-5">
                <div className="flex flex-nowrap gap-5">
                  <CustomPriceInput
                    label="시급"
                    displayRequiredMarker={true}
                    register={register("hourlyPay")}
                    errorMessage={errors.hourlyPay?.message}
                    className="md:w-1/2 lg:w-1/3"
                  />
                  <CustomDateInput
                    label="시작일시"
                    displayRequiredMarker={true}
                    register={register("startsAt")}
                    errorMessage={errors.startsAt?.message}
                    className="lg:w-1/3"
                  />
                  <CustomTimeInput
                    label="업무 시간"
                    displayRequiredMarker={true}
                    register={register("workhour")}
                    placeholder="12시간 이하로 입력해주세요."
                    errorMessage={errors.workhour?.message}
                    className="md:w-full lg:w-1/3"
                  />
                </div>
                <CustomTextarea
                  label="공고 설명"
                  placeholder="공고 설명을 입력해 주세요"
                  register={register("description")}
                />
              </div>

              <Button className="" type="submit">
                등록하기
              </Button>
            </div>
          </form>
        </div>
      </dialog>
    </div>,
    document.getElementById("modal-root")!,
  );
}
