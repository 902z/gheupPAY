"use client";
import FormDropdown from "@/app/_components/form-dropdown";
import Head from "next/head";
import React from "react";
import { FieldValues, SubmitHandler, useForm } from "react-hook-form";

export default function page() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue,
    formState: { errors },
  } = useForm();

  const options = [
    { label: "서울시 강동구", value: "서울시 강동구" },
    { label: "서울시 강남구", value: "서울시 강남구" },
    { label: "서울시 종로구", value: "서울시 종로구" },
  ];

  // label과 value의 분리는 보이는 것과 api로 보내는 것을 분리하기 위함
  const cuisineOptions = [
    { label: "⚡️ 한식", value: "한식" },
    { label: "✅ 중식", value: "중식" },
    { label: "양식", value: "양식" },
    { label: "일식", value: "일식" },
    { label: "분식", value: "분식" },
    { label: "패스트푸드", value: "패스트푸드" },
    { label: "디저트", value: "디저트" },
    { label: "카페", value: "카페" },
  ];

  const onSubmit: SubmitHandler<FieldValues> = (data) => {
    alert("주소: " + data.address + " " + "분류: " + data.cuisine);
  };

  return (
    <>
      <div className="w-[472px]">
        <form onSubmit={handleSubmit(onSubmit)}>
          <FormDropdown
            name="address"
            label="주소"
            options={options}
            register={register}
            setValue={setValue}
            getValues={getValues}
            placeholder="선택"
          />
          <FormDropdown
            name="cuisine"
            label="분류"
            options={cuisineOptions}
            register={register}
            setValue={setValue}
            getValues={getValues}
            placeholder="선택"
          />
          <button type="submit">Submit</button>
        </form>
      </div>
    </>
  );
}
