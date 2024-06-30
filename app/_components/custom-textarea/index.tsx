import { UseFormRegisterReturn } from "react-hook-form";

interface CustomTextareaProp {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

/**
 * 
 * 커스텀 textarea input
 * (react-hook-form + yup 조건)
 * 넓이는 부모 요소 100%
 * @example
 *<CustomTextarea
    label="가게 설명"
    placeholder="가게 설명을 입력해 주세요"
    register={register("description")}
  />
 *  
* @param {string} label 레이블
 * @param {string} placeholder placeholder
 * @param {UseFormRegisterReturn} register react-hook-form register
 * @author ☯️채종민
 */

function CustomTextarea({ label, placeholder, register }: CustomTextareaProp) {
  return (
    <label className="flex w-full flex-col gap-2 text-start text-base font-normal leading-[26px] text-black">
      {label}
      <textarea
        placeholder={placeholder}
        {...register}
        className="h-[153px] resize-none rounded-[5px] border border-solid border-gray-30 pl-5 pt-4 text-base font-normal leading-[26px] text-black placeholder:text-gray-40 focus:outline-primary"
      />
    </label>
  );
}

export default CustomTextarea;
