import useOutsideClick from "@/app/_hooks/use-outside-click";
import Image from "next/image";
import { InputHTMLAttributes, useRef, useState } from "react";
import { UseFormRegisterReturn } from "react-hook-form";
import DownArrow from "@/public/icons/down-arrow.png";

interface Option {
  label: string;
  value: string;
}

interface FormDropdownProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  placeholder: string;
  options: Option[];
  register: UseFormRegisterReturn;
  displayRequiredMarker: boolean;
  setValue: (value: string) => void;
  getValues: () => string;
  errorMessage?: string;
}

/**
 * @example
 * //선언부
 * function TestPage() {
  const resolver = yupResolver(storeRegisterSchema);

  const {
    handleSubmit,
    register,
    getValues,
    setValue,
    formState: { errors },
  } = useForm<FormValues>({
    resolver,
    mode: "onSubmit",
  });

  const options = [
    { label: "서울시 강동구", value: "서울시 강동구" },
    { label: "서울시 강남구", value: "서울시 강남구" },
    { label: "서울시 종로구", value: "서울시 종로구" },
  ]
  // 호출부
<div --> 너비는 항상 부모에 full 이기 때문에 부모요소에서 지정해주세요>
  <form onSubmit={handleSubmit(onSubmit)}>
    <CustomFormDropdown
          label="주소"
          options={formattedAddresses}
          register={register("address1")}
          setValue={(value: string): void => setValue("address1", value)}
          getValues={(): string => getValues("address1")}
          placeholder="선택"
    />
    <button type="submit">Submit</button>
  </form>
</div>

 * 부모요소에서 너비를 적용해주세요
 * @auth 채종민 extends 임진조
 * @param label `<label>`tag 텍스트
 * @param name register name
 * @param options dropdown option label, value 키,값 쌍을 가지는 배열
 * @param register react-hook-form register
 * @param setValue react-hook-form setValue
 * @param getValues react-hook-form getValue
 * @param displayRequiredMarker placeholder text
 * @param errorMessage 에러메시지
 */

function CustomFormDropdown({
  label,
  options,
  register,
  setValue,
  getValues,
  placeholder,
  displayRequiredMarker = false,
  errorMessage,
}: FormDropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);
  const handleDropdown = () => {
    setIsOpen((prev) => !prev);
  };

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  const handleItemClick = (e: React.MouseEvent<HTMLLIElement>) => {
    const selected = options.find(
      (item) => item.label === e.currentTarget.textContent,
    );
    setValue(selected?.value || "");
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative text-start">
      <div className="mb-2">
        <label htmlFor={register.name}>
          {label}
          {displayRequiredMarker && (
            <abbr
              className="no-underline"
              title="필수입력"
              aria-label="required"
            >
              *
            </abbr>
          )}
        </label>
      </div>
      <div className={`relative ${errorMessage && "outline-primary"}`}>
        <input
          className={`hover: hover: h-[58px] w-full cursor-pointer rounded-[6px] border border-gray-30 pl-5 text-left hover:bg-gray-10 focus:outline-none ${getValues() === undefined ? "text-gray-40" : "text-black"} `}
          id={register.name}
          {...register}
          value={getValues() || ""}
          onClick={handleDropdown}
          placeholder={placeholder}
          readOnly
        />
        <Image
          className={`hover: absolute right-5 top-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          src={DownArrow}
          width={16}
          height={16}
          style={{ width: "12.8px", height: "auto" }}
          alt="arrow-down"
          onClick={handleDropdown}
        />
      </div>
      <ul
        className={`absolute left-0 z-10 mt-2 max-h-[230px] w-full overflow-y-auto rounded-[6px] border border-gray-30 bg-white p-0 text-m shadow-md ${isOpen ? "block" : "hidden"}`}
      >
        {options.map((item, index) => (
          <li
            className="hover:bg-gray-10f h-[46px] cursor-pointer text-center leading-[46px] hover:bg-gray-10"
            onClick={handleItemClick}
            key={index}
          >
            {item.label}
            {options.length - 1 !== index && <hr className="bg-gray-20" />}
          </li>
        ))}
      </ul>
      {errorMessage && (
        <span className="pl-2 text-left text-s font-normal leading-4 text-primary">
          {errorMessage}
        </span>
      )}
    </div>
  );
}
export default CustomFormDropdown;
