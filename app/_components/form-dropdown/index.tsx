import useOutsideClick from "@/app/_hooks/use-outside-click";
import Image from "next/image";
import { InputHTMLAttributes, useRef, useState } from "react";
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";
import DownArrow from "@/public/icons/down-arrow.png";
import { DROPDOWN_REQUIRED_TEXT } from "@/app/_constants/validation-text";
interface Option {
  label: string;
  value: string;
}

interface FormDropdownProps extends InputHTMLAttributes<HTMLInputElement> {
  label: string;
  name: string;
  placeholder: string;
  options: Option[];
  register: UseFormRegister<FieldValues>;
  setValue: UseFormSetValue<FieldValues>;
  getValues: UseFormGetValues<FieldValues>;
}

/**
 * @example
 * //선언부
 * function TestPage() {
  const {
    register,
    handleSubmit,
    getValues,
    setValue
    formState: { errors },
  } = useForm();

  const options = [
    { label: "서울시 강동구", value: "서울시 강동구" },
    { label: "서울시 강남구", value: "서울시 강남구" },
    { label: "서울시 종로구", value: "서울시 종로구" },
  ]
  // 호출부
<div --> 너비는 항상 부모에 full 이기 때문에 부모요소에서 지정해주세요>
  <form onSubmit={handleSubmit(onSubmit)}>
    <Dropdown
      name="address"
      label="주소"
      options={options}
      register={register}
      setValue={setValue}
      getValues={getValues}
      placeholder="선택"
    />
    <button type="submit">Submit</button>
  </form>
</div>

 * 부모요소에서 너비를 적용해주세요
 * @auth 임진조
 * @param  label `<label>`tag 텍스트
 * @param name register name
 * @param options dropdown option label, value 키,값 쌍을 가지는 배열
 * @param register react-hook-form register
 * @param setValue react-hook-form setValue
 * @param getValues react-hook-form getValue
 * @param placeholder placeholder text
 */

function FormDropdown({ label, name, options, register, setValue, getValues, placeholder }: FormDropdownProps) {
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
    const selected = options.find((item) => item.label === e.currentTarget.textContent);
    setValue(name, selected?.value || "");
    setIsOpen(false);
  };

  return (
    <div ref={dropdownRef} className="relative">
      <div className="mb-2">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="relative">
        <input
          className={`hover: h-[58px] w-full cursor-pointer rounded-[6px] border border-gray-30 pl-5 text-left focus:outline-none ${getValues(name) === undefined ? "text-gray-40" : "text-black"} `}
          id={name}
          {...register(name, {
            required: DROPDOWN_REQUIRED_TEXT,
            validate: (value) => value !== placeholder || "This is required",
          })}
          value={getValues(name) || ""}
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
        className={`absolute left-0 z-10 mt-2 w-full rounded-[6px] border border-gray-30 bg-white text-m shadow-md ${isOpen ? "block" : "hidden"}`}
      >
        {options.map((item, index) => (
          <li className="h-[46px] cursor-pointer text-center leading-[46px]" onClick={handleItemClick} key={index}>
            {item.label}
            {options.length - 1 !== index && <hr className="bg-gray-20" />}
          </li>
        ))}
      </ul>
    </div>
  );
}
export default FormDropdown;
