"use client";
import CustomTextInput from "@/app/_components/custom-text-input";
import { useForm } from "react-hook-form";
import UserTypeSelect from "./_components/user-type-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../schema";
import { UserType } from "@/app/_constants/user-type";
import Button from "@/app/_components/button";
import { postSignUp } from "@/app/_apis/user";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import Image from "next/image";
import useCheckLoginStatus from "@/app/_hooks/use-check-login-status";
import useModal from "@/app/_hooks/use-modal";
import ConfirmModal from "@/app/_components/modals/_components/confirm-modal";
import loading from "@/public/images/loading.gif";

interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
  type: UserType;
}

function SignUpForm() {
  const router = useRouter();
  const resolver = yupResolver(signUpSchema);
  const {
    isOpen: successIsOpen,
    openModal: successOpenModal,
    closeModal: successCloseModal,
  } = useModal();
  const {
    isOpen: failIsOpen,
    openModal: failOpenModal,
    closeModal: failCloseModal,
  } = useModal();

  const modalMessage = useRef<string | null>(null);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    mode: "onSubmit",
  });

  const [waiting, setWaiting] = useState(false);

  const handleRedirect = () => {
    router.replace("/login");
  };

  const handleForm = handleSubmit(async (data: FormValues) => {
    const { email, password, type } = data;
    try {
      setWaiting(true);
      const result = await postSignUp({ email, password, type });
      if (result) {
        modalMessage.current = "가입이 완료되었습니다!";
        successOpenModal();
      }
    } catch (error) {
      if (error instanceof Error) {
        modalMessage.current = error.message;
        failOpenModal();
      }
    } finally {
      setWaiting(false);
    }
  });

  const { isLoggedIn, setIsLoggedIn } = useCheckLoginStatus();

  return (
    <>
      <form onSubmit={handleForm} className="mb-4 flex w-full flex-col gap-7">
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

        <CustomTextInput
          label="비밀번호 확인"
          placeholder="비밀번호 한 번 더 입력하세요"
          register={register("passwordConfirm")}
          type="password"
          errorMessage={errors.passwordConfirm?.message}
        />

        <UserTypeSelect register={register("type")} />

        {waiting ? (
          <Image
            src={loading}
            alt="처리 중"
            width={60}
            height={60}
            className="mx-auto my-0"
          />
        ) : (
          <Button btnColor="orange" color="submit" className="h-[48px]">
            가입하기
          </Button>
        )}
      </form>
      {failIsOpen && (
        <ConfirmModal closeModal={failCloseModal}>
          {modalMessage.current}
        </ConfirmModal>
      )}
      {successIsOpen && (
        <ConfirmModal onClick={handleRedirect} closeModal={successCloseModal}>
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

export default SignUpForm;
