"use client";
import CustomTextInput from "@/app/_components/custom-text-input";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../schema";
import Button from "@/app/_components/button";
import { postLogin } from "@/app/_apis/authentication";
import { useRouter } from "next/navigation";
import { USER_TYPE } from "@/app/_constants/user-type";
import pulse from "@/public/icons/pulse.svg";
import Image from "next/image";
import { useState } from "react";
import useUserStore from "@/stores/create-store";
import useCheckLoginStatus from "@/app/_hooks/use-check-login-status";
import useModal from "@/app/_hooks/use-modal";
import ConfirmModal from "@/app/_components/modals/_components/confirm-modal";

interface FormValues {
  email: string;
  password: string;
}

function LoginForm() {
  const router = useRouter();
  const resolver = yupResolver(loginSchema);
  const { isOpen, openModal, closeModal } = useModal();
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    mode: "onSubmit",
  });
  const [waiting, setWaiting] = useState(false);
  const [failMessage, setFailMessage] = useState("");
  const login = useUserStore((state) => state.login);

  const handleForm = handleSubmit(async (data: FormValues) => {
    try {
      setWaiting(true);
      const result = await postLogin(data);
      if (result) {
        login(result.item.user.item.type);
        if (result.item.user.item.type === USER_TYPE.EMPLOYEE) {
          router.replace("/notice-list");
        } else {
          router.replace("/admin/shop-detail");
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        setFailMessage(error.message);
        openModal();
      }
    } finally {
      setWaiting(false);
    }
  });
  useCheckLoginStatus();

  return (
    <>
      <form
        onSubmit={handleForm}
        className="mb-4 flex w-full flex-col items-center gap-7"
      >
        <CustomTextInput
          label="이메일"
          placeholder="이메일을 입력하세요"
          register={register("email")}
          errorMessage={errors.email?.message}
        />

        <CustomTextInput
          label="비밀번호"
          placeholder="비밀번호를 입력하세요"
          register={register("password")}
          type="password"
          errorMessage={errors.password?.message}
        />

        {waiting ? (
          <Image src={pulse} alt="처리 중" width={48} height={48} />
        ) : (
          <Button btnColor="orange" color="submit" className="h-[48px]">
            로그인 하기
          </Button>
        )}
      </form>

      {isOpen && (
        <ConfirmModal closeModal={closeModal}>{failMessage}</ConfirmModal>
      )}
    </>
  );
}

export default LoginForm;
