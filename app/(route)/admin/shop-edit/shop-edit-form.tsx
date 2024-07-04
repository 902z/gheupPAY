"use client";

import CustomTextInput from "@/app/_components/custom-text-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { storeRegisterSchema } from "./schema";
import Button from "@/app/_components/button";
import CustomTextarea from "@/app/_components/custom-textarea";
import { AddressType, FORMATTED_ADDRESS } from "@/app/_constants/address";
import CustomFormDropdown from "@/app/_components/custom-form-dropdown";
import CustomPriceInput from "@/app/_components/custom-price-input";
import { CUISINE_OPTION, CategoryType } from "@/app/_constants/category";
import camera from "@/public/icons/camera.png";
import Image from "next/image";
import React, { useEffect, useRef, useState } from "react";
import { putEditShop } from "@/app/_apis/shop";
import useModal from "@/app/_hooks/use-modal";
import ConfirmModal from "@/app/_components/modals/_components/confirm-modal";
import pulse from "@/public/icons/pulse.svg";
import { numberWithCommas } from "@/app/_util/number-with-comma";

interface InitialData {
  name: string;
  category: CategoryType;
  address1: AddressType;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: string;
}

interface FormValues {
  name: string;
  category: CategoryType;
  address1: AddressType;
  address2: string;
  description?: string;
  imageUrl?: FileList;
  originalHourlyPay: string;
}
interface ShopEditFormProps {
  initialData: InitialData;
  shopId: string;
}

function ShopEditForm({ initialData, shopId }: ShopEditFormProps) {
  const { isOpen, openModal, closeModal } = useModal();
  const modalMessage = useRef<string | null>(null);
  const [waiting, setWaiting] = useState(false);
  const resolver = yupResolver(storeRegisterSchema);
  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
    watch,
  } = useForm<FormValues>({
    resolver,
    mode: "onSubmit",
    defaultValues: {
      name: initialData.name,
      category: initialData.category,
      address1: initialData.address1,
      address2: initialData.address2,
      description: initialData.description,
      originalHourlyPay: initialData.originalHourlyPay,
    },
  });
  const [imagePreview, setImagePreview] = useState(initialData.imageUrl);
  const image = watch("imageUrl");
  useEffect(() => {
    if (image && image.length > 0) {
      const file = image[0];
      setImagePreview(URL.createObjectURL(file));
    }
  }, [image]);

  const handleForm = handleSubmit(async (data: FormValues) => {
    console.log(data);
    let editedImageUrl: File | string;
    if (!data.imageUrl || data.imageUrl?.length === 0) {
      editedImageUrl = initialData.imageUrl;
    } else {
      editedImageUrl = data.imageUrl[0];
    }
    const processedData = {
      ...data,
      originalHourlyPay: Number(data.originalHourlyPay.replaceAll(",", "")),
      imageUrl: editedImageUrl,
      shopId: shopId,
    };

    try {
      setWaiting(true);
      const result = await putEditShop(processedData);
      if (result) {
        modalMessage.current = "수정이 완료되었습니다.";
        openModal();
      }
    } catch (error) {
      if (error instanceof Error) {
        modalMessage.current = error.message;
        openModal();
      }
    } finally {
      setWaiting(false);
    }
  });
  const handleRedirect = () => {
    window.location.replace("/admin/shop-detail");
  };

  return (
    <>
      <form onSubmit={handleForm} className="mt-6 w-full md:mt-8">
        <div className="grid w-full grid-rows-[repeat(5,minmax(92px,auto))] gap-y-5 md:grid-cols-2 md:gap-x-5 md:gap-y-6">
          <CustomTextInput
            label="가게 이름"
            placeholder="가게 이름을 입력해 주세요"
            register={register("name")}
            displayRequiredMarker={true}
            errorMessage={errors.name?.message}
          />

          <CustomFormDropdown<CategoryType>
            label="분류"
            options={CUISINE_OPTION}
            register={register("category")}
            setValue={(value: CategoryType): void =>
              setValue("category", value)
            }
            getValues={(): CategoryType => getValues("category")}
            placeholder="선택"
            displayRequiredMarker={true}
            errorMessage={errors.category?.message}
          />
          <CustomFormDropdown<AddressType>
            label="주소"
            options={FORMATTED_ADDRESS}
            register={register("address1")}
            setValue={(value: AddressType): void => setValue("address1", value)}
            getValues={(): AddressType => getValues("address1")}
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
            initialValue={initialData.originalHourlyPay}
            errorMessage={errors.originalHourlyPay?.message}
          />

          <div className="flex h-[240px] w-full max-w-[483px] flex-col gap-2 md:col-start-1 md:col-end-3 md:row-start-4 md:row-end-5 md:h-[310px]">
            <label
              htmlFor="imageUrl"
              className="h-full w-full cursor-pointer text-start text-base font-normal leading-[26px] text-black"
            >
              가게 이미지{" "}
              <abbr
                className="no-underline"
                title="필수입력"
                aria-label="required"
              >
                *
              </abbr>
              <div className="relative mt-2 h-[200px] w-full rounded-xl bg-gray-30 md:h-[276px]">
                {imagePreview ? (
                  <Image
                    src={imagePreview}
                    alt="이미지 미리보기"
                    fill
                    className="rounded-xl object-cover"
                  />
                ) : (
                  <div className="flex h-full flex-col items-center justify-center gap-[13px]">
                    <div className="relative h-8 w-8 md:h-9 md:w-9">
                      <Image src={camera} alt="카메라" fill />
                    </div>
                    <span className="font-bold text-base leading-5 text-gray-40">
                      이미지 등록
                    </span>
                  </div>
                )}
              </div>
            </label>
            <input
              id="imageUrl"
              type="file"
              accept="image/png, image/jpeg"
              className="hidden"
              {...register("imageUrl")}
            />
            <span className="pl-2 text-left text-s font-normal leading-4 text-primary">
              {errors.imageUrl?.message}
            </span>
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
          {waiting ? (
            <Image
              src={pulse}
              alt="처리 중"
              width={48}
              height={48}
              className="mx-auto my-0"
            />
          ) : (
            <Button className="text-base" type="submit" btnColor="orange">
              완료하기
            </Button>
          )}
        </div>
      </form>
      {isOpen && (
        <ConfirmModal onClick={handleRedirect} closeModal={closeModal}>
          {modalMessage.current}
        </ConfirmModal>
      )}
    </>
  );
}

export default ShopEditForm;
