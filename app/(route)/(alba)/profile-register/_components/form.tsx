"use client";
import CustomTextarea from "@/app/_components/custom-textarea";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";
import Button from "@/app/_components/button";
import CustomTextInput from "@/app/_components/custom-text-input";
import { profileRegisterSchema } from "./schema";
import CustomFormDropdown from "@/app/_components/custom-form-dropdown";
import { AddressType, FORMATTED_ADDRESS } from "@/app/_constants/address";
import { putUserProfile } from "@/app/_apis/user";
import useModal from "@/app/_hooks/use-modal";
import ConfirmModal from "@/app/_components/modals/_components/confirm-modal";
import { setCookie } from "@/app/_util/cookie";

type FormDataType = {
  name: string;
  phone: string;
  address: AddressType;
  bio: string;
};

export default function CreateProfileForm({
  initialData,
}: {
  initialData?: FormDataType;
}) {
  const resolver = yupResolver(profileRegisterSchema);
  const { isOpen, closeModal, openModal } = useModal();
  const {
    register,
    handleSubmit,
    setValue,
    getValues,
    formState: { errors },
  } = useForm<FormDataType>({
    resolver,
    mode: "onSubmit",
    defaultValues: {
      name: initialData?.name,
      phone: initialData?.phone,
      address: initialData?.address,
      bio: initialData?.bio,
    },
  });

  const handleModalConfirm = () => {
    window.location.replace("/profile-detail");
  };

  const onSubmit = async (data: FormDataType) => {
    const response = await putUserProfile(data);
    if (response) {
      await setCookie("address", data.address);
      openModal();
    }
  };
  return (
    <>
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
              <CustomTextInput
                label="전화번호"
                displayRequiredMarker={true}
                register={register("phone")}
                errorMessage={errors.phone?.message}
                placeholder="010-1234-5678"
              />
              <CustomFormDropdown<AddressType>
                label="선호 지역"
                displayRequiredMarker={true}
                options={FORMATTED_ADDRESS}
                register={register("address")}
                setValue={(value: AddressType): void =>
                  setValue("address", value)
                }
                getValues={(): AddressType => getValues("address")}
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
      {isOpen && (
        <ConfirmModal closeModal={closeModal} onClick={handleModalConfirm}>
          등록이 완료되었습니다.
        </ConfirmModal>
      )}
    </>
  );
}
