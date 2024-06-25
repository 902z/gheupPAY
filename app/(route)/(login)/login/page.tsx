"use client";
import CustomTextInput from "@/app/_components/custom-text-input";
import { useForm } from "react-hook-form";
import Link from "next/link";
import { yupResolver } from "@hookform/resolvers/yup";
import { loginSchema } from "../_utils/schema";
import Button from "@/app/_components/button";
import postLogin from "@/app/_apis/login/post-login";
import { useRouter } from "next/navigation";
import { USER_TYPE } from "@/app/_constants/user-type";
import pulse from "@/public/icons/pulse.svg";
import Image from "next/image";
import { useState } from "react";


interface FormValues {
  email: string;
  password: string;
}

function Login() {


  const router = useRouter();
  const resolver = yupResolver(loginSchema);
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
    try {
      setWaiting(true);
      const result = await postLogin(data);
      if (result) {
        console.log(result);
        alert("로그인 성공");
        if (result.item.user.item.type === USER_TYPE.EMPLOYEE) {
          router.push("/announce-list");
        } else {
          router.push("/admin/store-detail");
        }
      }
    } catch (error) {
      if (error instanceof Error) {
        console.log(error);
        alert(error.message);
      }
    } finally {
      setWaiting(false);
    }
  });

  return (
    <>
      <form onSubmit={handleForm} className="mb-4 flex w-full flex-col items-center gap-7">
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
          <Button color="orange" type="submit" className="h-[48px]">
            로그인 하기
          </Button>
        )}
      </form>
      <nav>
        <span className="text-base font-normal leading-5 text-instruction">회원이 아니신가요? </span>
        <Link href="/signup" className="cursor-pointer text-link underline">
          회원가입하기
        </Link>
      </nav>
    </>
  );
}

export default Login;
