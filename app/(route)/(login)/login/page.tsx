"use client";
import CustomTextInput from "@/app/_components/custom-text-input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../_utils/schema";
import Button from "@/app/_components/button";

interface FormValues {
  email: string;
  password: string;
}

function Login() {
  const resolver = yupResolver(loginSchema);
  const {
    handleSubmit,
    register,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    mode: "onSubmit",
  });

  const handleForm = handleSubmit(async (data: FormValues) => {
    // console.log(data);
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

        <Button color="orange" type="submit" className="h-[48px]">
          로그인 하기
        </Button>
      </form>
      <nav>
        <span className="text-base font-normal leading-5 text-instruction">
          회원이 아니신가요?{" "}
        </span>
        <Link href="/signup" className="cursor-pointer text-link underline">
          회원가입하기
        </Link>
      </nav>
    </>
  );
}

export default Login;
