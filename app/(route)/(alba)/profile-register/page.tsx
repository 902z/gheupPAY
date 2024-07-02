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
import { profileRegisterSchema } from "./components/schema";
import CustomFormDropdown from "@/app/_components/custom-form-dropdown";
import CreateProfileForm from "./components/form";

interface SearchParamsProps {
  searchParams: {
    page: string;
  };
}

export default function AddNotice() {
  const router = useRouter();

  function onDismiss() {
    router.back();
  }

  return (
    <div className="mt-[70px]">
      <div className="ml-auto mr-auto mt-[70px] max-w-[964px] pb-20 pl-3 pr-3 pt-[60px] md:pl-8 md:pr-8">
        <div className="mb-6 flex justify-between">
          <h1 className="font-bold text-l">공고 등록</h1>
          <button onClick={onDismiss}>
            <Image src={close} alt="close" width={32} height={32} />
          </button>
        </div>
        <CreateProfileForm />
      </div>
    </div>
  );
}
