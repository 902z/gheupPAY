"use client";

import CustomTextInput from "@/app/_components/custom-text-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { storeRegisterSchema } from "./schema";
import Button from "@/app/_components/button";
import CustomTextarea from "@/app/_components/custom-textarea";
import { ADDRESS } from "@/app/_constants/address";
import CustomFormDropdown from "@/app/_components/custom-form-dropdown";
import CustomPriceInput from "@/app/_components/custom-price-input";
import { CUISINE_OPTION } from "@/app/_constants/category";
import camera from "@/public/icons/camera.png";
import Image from "next/image";
import TitleWithXHeader from "@/app/_components/title-with-x";
import { useRouter } from "next/navigation";
import { createPortal } from "react-dom";
import React, { ElementRef, useEffect, useRef } from "react";
interface FormValues {
  name: string;
  category: string;
  address1: string;
  address2: string;
  description: string;
  originalHourlyPay: string;
  imageUrl?: string;
}

const formattedAddresses = ADDRESS.map((address) => ({
  label: address,
  value: address,
}));

function storeRegister() {
  const resolver = yupResolver(storeRegisterSchema);
  const router = useRouter();
  const dialogRef = useRef<ElementRef<"dialog">>(null);

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    mode: "onSubmit",
  });

  const handleForm = handleSubmit(async (data: FormValues) => {
    const processedData = {
      ...data,
      originalHourlyPay: Number(data.originalHourlyPay.replaceAll(",", "")),
    };

    console.log(processedData);
  });

  useEffect(() => {
    if (!dialogRef.current?.open) {
      dialogRef.current?.showModal();
    }
  }, []);

  return createPortal(
    <dialog
      className="mb-[70px] mt-[102px] min-h-screen w-full max-w-[964px] px-3 pb-[60px] md:mt-[70px]"
      ref={dialogRef}
    >
      <TitleWithXHeader onClick={() => router.back()}>
        가게 등록하기
      </TitleWithXHeader>
      <form onSubmit={handleForm} className="mt-6 w-full md:mt-8">
        <div className="grid w-full grid-rows-[repeat(5,minmax(92px,auto))] gap-y-5 md:grid-cols-2 md:gap-x-5 md:gap-y-6">
          <CustomTextInput
            label="가게 이름"
            placeholder="가게 이름을 입력해 주세요"
            register={register("name")}
            displayRequiredMarker={true}
            errorMessage={errors.name?.message}
          />

          <CustomFormDropdown
            label="분류"
            options={CUISINE_OPTION}
            register={register("category")}
            setValue={(value: string): void => setValue("category", value)}
            getValues={(): string => getValues("category")}
            placeholder="선택"
            displayRequiredMarker={true}
            errorMessage={errors.address1?.message}
          />
          <CustomFormDropdown
            label="주소"
            options={formattedAddresses}
            register={register("address1")}
            setValue={(value: string): void => setValue("address1", value)}
            getValues={(): string => getValues("address1")}
            placeholder="선택"
            displayRequiredMarker={true}
            errorMessage={errors.address1?.message}
          />

          <CustomTextInput
            label="상세 주소"
            placeholder="상세 주소를 입력해 주세요"
            register={register("address2")}
            displayRequiredMarker={true}
            errorMessage={errors.address2?.message}
          />

          <CustomPriceInput
            label="기본 시급"
            placeholder="기본 시급을 입력해 주세요"
            register={register("originalHourlyPay")}
            displayRequiredMarker={true}
            errorMessage={errors.originalHourlyPay?.message}
          />

          <div className="flex h-[235px] w-full max-w-[483px] flex-col gap-2 md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-5 md:h-[310px]">
            <label className="h-full w-full cursor-pointer text-start text-base font-normal leading-[26px] text-black">
              가게 이미지
              <div className="mt-2 flex h-[200px] w-full flex-col items-center justify-center gap-[13px] rounded-xl bg-gray-30 md:h-[276px]">
                <div className="relative h-8 w-8 md:h-9 md:w-9">
                  <Image src={camera} alt="카메라" fill />
                </div>
                <span className="font-bold text-base leading-5 text-gray-40">
                  이미지 등록
                </span>
              </div>
            </label>
            <input
              type="file"
              name={"imageUrl"}
              // ref=""
              accept="image/png, image/jpeg"
              onChange={() => {}}
              className="hidden"
            />
          </div>

          <div className="md:col-start-1 md:col-end-3 md:row-start-5 md:row-end-6">
            <CustomTextarea
              label="가게 설명"
              placeholder="가게 설명을 입력해 주세요"
              register={register("description")}
            />
          </div>
        </div>
        <div className="mx-auto my-0 mt-6 w-[321px] text-base md:mt-8">
          <Button className="text-base" type="submit" color="orange">
            완료하기
          </Button>
        </div>
      </form>
    </dialog>,
    document.getElementById("modal-root")!,
  );
}

export default storeRegister;
