"use client";
import CustomPriceInput from "@/app/_components/custom-price-input";
import CustomTextarea from "@/app/_components/custom-textarea";
import CustomTimeInput from "@/app/_components/custom-time-input";
import { yupResolver } from "@hookform/resolvers/yup";
import { useParams } from "next/navigation";
import React, { ElementRef, use, useEffect, useRef } from "react";
import { createPortal } from "react-dom";
import { useForm } from "react-hook-form";
import CustomDateInput from "@/app/_components/custom-date-input";
import Button from "@/app/_components/button";
import close from "@/public/icons/close.png";
import Image from "next/image";
import { storeNoticeRegisterSchema } from "./schema";
import { useRouter } from "next/navigation";
import { postCreateNotice } from "@/app/_apis/notice";
export default function AddNotice() {
  const router = useRouter();
  const params = useParams();
  const shop_id = params.shop_id as string;
  const resolver = yupResolver(storeNoticeRegisterSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({ resolver, mode: "onSubmit" });

  function onDismiss() {
    router.back();
  }
  const onSubmit = async (data: any) => {
    data.startsAt = new Date(data.startsAt).toISOString();
    // const response = await postCreateNotice(shop_id, data);
    console.log(data);
  };

  return createPortal(
    <div className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50 md:pt-[188px]">
      <div className="relative w-full max-w-[964px] rounded-t-lg bg-white pt-[35px]">
        <section className="h-full w-full overflow-scroll px-3 pb-[40px]">
          <header className="h- flex w-full justify-between">
            <h2 className="font-bold text-l leading-[25px]">공고 등록</h2>
            <div
              className="relative h-6 w-6 cursor-pointer md:h-8 md:w-8"
              onClick={() => router.back()}
            >
              <Image src={close} alt="닫기 버튼" fill priority />
            </div>
          </header>
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
        </section>
      </div>
    </div>,
    document.body,
  );
}
