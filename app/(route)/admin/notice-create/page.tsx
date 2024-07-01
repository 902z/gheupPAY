"use client";
import CustomDateInput from "@/app/_components/custom-date-input";
import CustomPriceInput from "@/app/_components/custom-price-input";
import CustomTimeInput from "@/app/_components/custom-time-input";
import CustomTextarea from "@/app/_components/custom-textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React, { ElementRef, useEffect, useRef } from "react";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/button";
import close from "@/public/icons/close.png";
import Image from "next/image";
import { storeNoticeRegisterSchema } from "./schema";

export default function AddNotice() {
  const router = useRouter();
  const resolver = yupResolver(storeNoticeRegisterSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver, mode: "onSubmit" });

  function onDismiss() {
    router.back();
  }
  const onSubmit = (data: any) => {};

  return (
    <div className="mt-[70px]">
      <div className="ml-auto mr-auto mt-[70px] max-w-[964px] pb-20 pl-3 pr-3 pt-[60px] md:pl-8 md:pr-8">
        <div className="mb-6 flex justify-between">
          <h1 className="font-bold text-l">공고 등록</h1>
          <button onClick={onDismiss}>
            <Image src={close} alt="close" width={32} height={32} />
          </button>
        </div>
        <form onSubmit={handleSubmit(onSubmit)}>
          <div className="flex flex-col gap-6">
            <div className="flex flex-col gap-5">
              <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
                <CustomPriceInput
                  label="시급"
                  displayRequiredMarker={true}
                  register={register("hourlyPay")}
                  errorMessage={errors.hourlyPay?.message}
                />
                <CustomDateInput
                  label="시작일시"
                  displayRequiredMarker={true}
                  register={register("startsAt")}
                  errorMessage={errors.startsAt?.message}
                />
                <CustomTimeInput
                  label="업무 시간"
                  displayRequiredMarker={true}
                  register={register("workhour")}
                  placeholder="12시간 이하로 입력해주세요."
                  errorMessage={errors.workhour?.message}
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
    </div>
  );
}
