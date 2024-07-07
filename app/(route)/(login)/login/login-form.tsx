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
import { useRef, useState } from "react";
import useCheckLoginStatus from "@/app/_hooks/use-check-login-status";
import useModal from "@/app/_hooks/use-modal";
import ConfirmModal from "@/app/_components/modals/_components/confirm-modal";
import loading from "@/public/images/loading.gif";

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
  const modalMessage = useRef<string | null>(null);

  const handleForm = handleSubmit(async (data: FormValues) => {
    try {
      setWaiting(true);
      const result = await postLogin(data);
      if (result) {
        if (result.item.user.item.type === USER_TYPE.EMPLOYEE) {
          router.replace("/notice-list");
        } else {
          router.replace("/admin/shop-detail");
        }
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
  const { isLoggedIn, setIsLoggedIn } = useCheckLoginStatus();

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
          <Image src={loading} alt="처리 중" width={60} height={60} />
        ) : (
          <Button btnColor="orange" color="submit" className="h-[48px]">
            로그인 하기
          </Button>
        )}
      </form>

      {isOpen && (
        <ConfirmModal closeModal={closeModal}>
          {modalMessage.current}
        </ConfirmModal>
      )}
      {isLoggedIn && (
        <ConfirmModal
          closeModal={() => setIsLoggedIn(false)}
          onClick={() => router.replace("/notice-list")}
        >
          이미 로그인 상태입니다
        </ConfirmModal>
      )}
    </>
  );
}

export default LoginForm;
