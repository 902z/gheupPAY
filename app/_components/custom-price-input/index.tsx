"use client";
import {
  MAXIMUM_HOURLY_WAGE,
  MINIMUM_HOURLY_WAGE,
} from "@/app/_constants/hourly-wage";
import { numberWithCommas } from "@/app/_util/number-with-comma";
import { ChangeEvent, InputHTMLAttributes, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomTextInputPropType
  extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  displayRequiredMarker?: boolean;
  register: UseFormRegisterReturn;
  errorMessage?: string;
  initialValue?: string;
}

/**
 * 
 * 커스텀 가격 input 컴포넌트
 * (react-hook-form + yup 조건)
 * @example
 *<form className="w-[500px]"> //넓이는 부모 요소 100%
    <CustomPriceInput
      label="기본 시급"
      placeholder="기본 시급을 입력해 주세요"
      register={register("originalHourlyPay")}
        setValue={(value: number): void =>
          setValue("originalHourlyPay", value)
        }
      displayRequiredMarker={true}
      initialValue="12,000"
      errorMessage={errors.originalHourlyPay?.message}
    />
  </form>
 * @author ☯️채종민
 * @param {string} label input의 label
 * @param {UseFormRegister} register useForm register(name) 넣어주기 
 * @param {boolean} displayRequiredMarker label 옆에 * 필수 입력 표시
 * @param {string} errorMessage 입력 오류 시 나올 에러 메시지
 * @param {string} initialValue 디펄트값
 * @param {} rest input태그 넣고 싶은 속성 넣을 수 있습니다.
 */

function CustomPriceInput({
  label,
  register,
  displayRequiredMarker = false,
  errorMessage,
  initialValue,
  ...rest
}: CustomTextInputPropType) {
  const MINIMUM_WAGE_WITH_COMMAS = numberWithCommas(MINIMUM_HOURLY_WAGE);
  const MAXIMUM_WAGE_WITH_COMMAS = numberWithCommas(MAXIMUM_HOURLY_WAGE);
  const [stringValue, setStringValue] = useState(
    initialValue ? initialValue : MINIMUM_WAGE_WITH_COMMAS,
  );

  const handleChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    const stringNumericValue = value.replace(/\D/g, "");
    const numericValue = Number(stringNumericValue);
    if (numericValue > MAXIMUM_HOURLY_WAGE) {
      setStringValue(MAXIMUM_WAGE_WITH_COMMAS);
    } else {
      setStringValue(numberWithCommas(numericValue));
    }
    register.onChange(e);
  };

  const handleBlur = () => {
    if (Number(stringValue.replaceAll(",", "")) < MINIMUM_HOURLY_WAGE) {
      setStringValue(MINIMUM_WAGE_WITH_COMMAS);
    }
  };

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
      <div className="relative">
        <input
          id={register.name}
          type="text"
          {...register}
          value={stringValue}
          onChange={handleChange}
          onBlur={handleBlur}
          {...rest}
          className="h-[58px] w-full rounded-md border border-solid border-gray-30 bg-white pl-5 text-base font-normal leading-[26px] text-black placeholder:text-gray-40 focus:outline-primary"
        />
        <span className="absolute right-5 top-4">원</span>
      </div>
      {errorMessage && (
        <span className="pl-2 text-left text-s font-normal leading-4 text-primary">
          {errorMessage}
        </span>
      )}
    </div>
  );
}

export default CustomPriceInput;
