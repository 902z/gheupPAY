"use client";
import CustomTextarea from "@/app/_components/custom-textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useRouter } from "next/navigation";
import React from "react";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/button";
import close from "@/public/icons/close.png";
import Image from "next/image";
import CustomTextInput from "@/app/_components/custom-text-input";
import { profileRegisterSchema } from "./schema";
import CustomFormDropdown from "@/app/_components/custom-form-dropdown";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}
const OPTIONS = [
  { label: "서울시 종로구", value: "서울시 종로구" },
  { label: "서울시 중구", value: "서울시 중구" },
  { label: "서울시 용산구", value: "서울시 용산구" },
  { label: "서울시 성동구", value: "서울시 성동구" },
  { label: "서울시 광진구", value: "서울시 광진구" },
  { label: "서울시 동대문구", value: "서울시 동대문구" },
  { label: "서울시 중랑구", value: "서울시 중랑구" },
  { label: "서울시 성북구", value: "서울시 성북구" },
  { label: "서울시 강북구", value: "서울시 강북구" },
  { label: "서울시 도봉구", value: "서울시 도봉구" },
  { label: "서울시 노원구", value: "서울시 노원구" },
  { label: "서울시 은평구", value: "서울시 은평구" },
  { label: "서울시 서대문구", value: "서울시 서대문구" },
  { label: "서울시 마포구", value: "서울시 마포구" },
  { label: "서울시 양천구", value: "서울시 양천구" },
  { label: "서울시 강서구", value: "서울시 강서구" },
  { label: "서울시 구로구", value: "서울시 구로구" },
  { label: "서울시 금천구", value: "서울시 금천구" },
  { label: "서울시 영등포구", value: "서울시 영등포구" },
  { label: "서울시 동작구", value: "서울시 동작구" },
  { label: "서울시 관악구", value: "서울시 관악구" },
  { label: "서울시 서초구", value: "서울시 서초구" },
  { label: "서울시 강남구", value: "서울시 강남구" },
  { label: "서울시 송파구", value: "서울시 송파구" },
  { label: "서울시 강동구", value: "서울시 강동구" },
];

export default function AddNotice() {
  const router = useRouter();
  const resolver = yupResolver(profileRegisterSchema);
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm({ resolver, mode: "onSubmit" });

  function onDismiss() {
    router.back();
  }

  const onSubmit = async (data: any) => {
    // const response = await postCreateNotice(shop_id, data);
    console.log(data);
  };

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
                <CustomTextInput
                  label="이름"
                  displayRequiredMarker={true}
                  register={register("name")}
                  errorMessage={errors.name?.message}
                  placeholder="입력"
                />
                <div className="flex w-full flex-col gap-2">
                  <label
                    htmlFor="phone"
                    className="text-start text-base font-normal leading-[26px] text-black"
                  >
                    {"전화번호*"}
                  </label>

                  <input
                    className={`h-[58px] rounded-md border border-solid border-gray-30 bg-white pl-5 text-base font-normal leading-[26px] text-black placeholder:text-gray-40 focus:outline-primary`}
                    type="text"
                    placeholder="010-1234-5678"
                    {...register("phone")}
                  />
                  <span className="pl-2 text-left text-s font-normal leading-4 text-primary">
                    {errors.phone?.message}
                  </span>
                </div>
                <CustomFormDropdown
                  label="선호 지역"
                  displayRequiredMarker={true}
                  options={OPTIONS}
                  register={register("address")}
                  setValue={(value: string): void => setValue("address", value)}
                  getValues={(): string => getValues("address")}
                  placeholder="선택"
                />
              </div>

              <CustomTextarea
                label="소개"
                placeholder="알바 이력 또는 소개를 입력해 주세요"
                register={register("bio")}
              />
              <div className="flex justify-center">
                <Button className="max-w-[321px]" type="submit">
                  등록하기
                </Button>
              </div>
            </div>
          </div>
        </form>
      </div>
    </div>
  );
}
