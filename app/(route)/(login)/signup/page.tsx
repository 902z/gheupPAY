"use client";
import CustomTextInput from "@/app/_components/custom-text-input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import UserTypeSelect from "./_components/user-type-select";
import { yupResolver } from "@hookform/resolvers/yup";
import { signUpSchema } from "../_utils/schema";
import { UserType } from "@/app/_constants/user-type";
import Button from "@/app/_components/button";
import postSignUp from "@/app/_apis/post-signup";
import { useRouter } from "next/navigation";
import { useState } from "react";
import pulse from "@/public/icons/pulse.svg";
import Image from "next/image";

interface FormValues {
  email: string;
  password: string;
  passwordConfirm: string;
  type: UserType;
}

function SignUP() {
  const router = useRouter();
  const resolver = yupResolver(signUpSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    mode: "onSubmit",
  });

  const [waiting, setWaiting] = useState(false);

  const handleForm = handleSubmit(async (data: FormValues) => {
    const { email, password, type } = data;
    try {
      setWaiting(true);
      const result = await postSignUp({ email, password, type });
      if (result) {
        alert("회원가입 성공");
        router.push("/login");
      }
    } catch (error) {
      if (error instanceof Error) {
        alert(error.message);
      }
    } finally {
      setWaiting(false);
    }
  });

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
          <Image src={pulse} alt="처리 중" width={48} height={48} className="mx-auto my-0" />
        ) : (
          <Button color="orange" type="submit" className="h-[48px]">
            가입하기
          </Button>
        )}
      </form>

      <nav>
        <span className="text-base font-normal leading-5 text-instruction">이미 가입 하셨나요? </span>
        <Link href="/login" className="cursor-pointer text-link underline">
          로그인하기
        </Link>
      </nav>
    </>
  );
}

export default SignUP;
