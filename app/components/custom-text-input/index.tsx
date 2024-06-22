import { ButtonHTMLAttributes, InputHTMLAttributes } from "react";
import { UseFormRegisterReturn } from "react-hook-form";

interface CustomTextInputPropType extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  displayRequiredMarker?: boolean;
  register: UseFormRegisterReturn;
  type?: "text" | "password";
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
      type={"password"} // 생략하면 text
    />
  </form>
 * @author ☯️채종민
 * @param {string} label input의 label
 * @param {string} placeholder input의 placeholder
 * @param {UseFormRegister} register useForm register(name) 넣어주기 
 * @param {boolean} displayRequiredMarker label 옆에 * 필수 입력 표시
 * @param {"text"|"password"} type text인지 password인지 안 쓰면 text
 * @param {} rest input태그 넣고 싶은 속성 넣을 수 있습니다.
 */

function CustomTextInput({
  label,
  placeholder,
  register,
  displayRequiredMarker = false,
  type = "text",
  ...rest
}: CustomTextInputPropType) {
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
        type={type}
        {...rest}
        {...register}
        className="h-[58px] rounded-md border border-solid border-gray-30 bg-white pl-5 text-base font-normal leading-[26px] text-black placeholder:text-gray-40 focus:outline-primary"
      />
    </div>
  );
}

export default CustomTextInput;
