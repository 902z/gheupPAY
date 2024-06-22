import { UseFormRegisterReturn } from "react-hook-form";

interface CustomTextInputPropType {
  label: string;
  placeholder: string;
  displayRequiredMarker?: boolean;
  register: UseFormRegisterReturn;
}

/**
 * 
 * 커스텀 버튼 컴포넌트
 * (react-hook-form + yup 조건)
 * @example
 *<form className="w-[500px]"> //넓이는 부모 요소 100%
    <CustomTextInput(
      label="이메일"
      placeholder="이메일을 입력하세요"
      register={register("email"))}
      displayRequiredMarker={true}
    />
  </form>
 * @author ☯️채종민
 * @param {string} label input의 label
 * @param {string} placeholder input의 placeholder
 * @param {UseFormRegister} register useForm register(name) 넣어주기 
 * @param {boolean} displayRequiredMarker label 옆에 * 필수 입력 표시
 */

function CustomTextInput({ label, placeholder, register, displayRequiredMarker = false }: CustomTextInputPropType) {
  return (
    <div className="flex w-full flex-col gap-2">
      <label htmlFor={register.name} className="text-base font-normal leading-[26px] text-black">
        {label}
        {displayRequiredMarker && (
          <abbr className="no-underline" title="필수입력" aria-label="required">
            *
          </abbr>
        )}
      </label>
      <input
        id={register.name}
        placeholder={placeholder}
        {...register}
        className="focus:outline-primary h-[58px] rounded-md border border-solid border-gray-30 bg-white pl-5 text-base font-normal leading-[26px] text-black placeholder:text-gray-40"
      />
    </div>
  );
}

export default CustomTextInput;
