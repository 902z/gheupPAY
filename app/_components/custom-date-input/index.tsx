"use client";
import { InputHTMLAttributes, useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import { date } from "yup";

interface CustomDateInputPropType
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  displayRequiredMarker?: boolean;
  register: UseFormRegisterReturn;
  errorMessage?: string;
}

/**
 * 
 * 커스텀 버튼 컴포넌트
 * (react-hook-form + yup 조건)
 * @example
 *<form className="w-[500px]"> //넓이는 부모 요소 100%
    <CustomTextInput(
      label="비밀번호"
      placeholder="비밀번호를 입력하세요"
      register={register("email"))}
      displayRequiredMarker={true} //생략하면 * 없음
      type="password" // 생략하면 text
      errorMessage={errors.password?.message}
    />
  </form>
 * @author 임진조 extends ☯️채종민
 * @param {string} label input의 label
 * @param {string} placeholder input의 placeholder
 * @param {UseFormRegister} register useForm register(name) 넣어주기 
 * @param {boolean} displayRequiredMarker label 옆에 * 필수 입력 표시
 * @param {string} errorMessage 입력 오류 시 나올 에러 메시지
 * @param {} rest input태그 넣고 싶은 속성 넣을 수 있습니다.
 */

function CustomDateInput({
  label,
  register,
  displayRequiredMarker = false,
  errorMessage,
  ...rest
}: CustomDateInputPropType) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label
        htmlFor={register.name}
        className="text-start text-base font-normal leading-[26px] text-black"
      >
        {label}
        {displayRequiredMarker && (
          <abbr className="no-underline" title="필수입력" aria-label="required">
            *
          </abbr>
        )}
      </label>
      <input
        className={`h-[58px] rounded-md border border-solid border-gray-30 bg-white pl-5 text-base font-normal leading-[26px] text-black placeholder:text-gray-40 focus:outline-primary`}
        id={register.name}
        type="datetime-local"
        {...register}
        {...rest}
      />
      {errorMessage && (
        <span className="pl-2 text-left text-s font-normal leading-4 text-primary">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default CustomDateInput;
