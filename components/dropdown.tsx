import useOutsideClick from "@/hooks/use-outside-click";
import Image from "next/image";
import { InputHTMLAttributes, useRef, useState } from "react";
import { FieldValues, UseFormGetValues, UseFormRegister, UseFormSetValue } from "react-hook-form";

interface Option {
  label: string;
  value: string;
}

interface DropdownProps extends InputHTMLAttributes<HTMLInputElement> {
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
  ];
  // 호출부
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
 * 
 * @auth 임진조
 * @param  label `<label>`tag 텍스트
 * @param name register name
 * @param options dropdown option label, value 키,값 쌍을 가지는 배열
 * @param register react-hook-form register
 * @param setValue react-hook-form setValue
 * @param getValues react-hook-form getValue
 * @param placeholder placeholder text
 */

function Dropdown({ label, name, options, register, setValue, getValues, placeholder }: DropdownProps) {
  const [isOpen, setIsOpen] = useState(false);
  const dropdownRef = useRef<HTMLInputElement>(null);
  const handleDropdown = () => {
    setIsOpen(!isOpen);
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
    <div ref={dropdownRef}>
      <div className="mb-2">
        <label htmlFor={name}>{label}</label>
      </div>
      <div className="relative">
        <input
          className={`h-[58px] w-full rounded-[6px] border border-gray-30 pl-5 text-left focus:outline-none ${getValues(name) === undefined ? "text-gray-40" : "text-black"} `}
          id={name}
          {...register(name, {
            required: "This is required",
            validate: (value) => value !== placeholder || "This is required",
          })}
          value={getValues(name) || ""}
          onClick={handleDropdown}
          placeholder={placeholder}
          readOnly
        />
        <Image
          className={`absolute right-5 top-1/2 -translate-y-1/2 transition-transform duration-300 ${isOpen ? "rotate-180" : "rotate-0"}`}
          src="/icons/down-arrow.png"
          width={24}
          height={24}
          alt="arrow-down"
        />
      </div>
      {isOpen && (
        <ul className="text-m absolute mt-2 w-full rounded-[6px] border border-gray-30 bg-white shadow-md">
          {options.map((item, index) => (
            <li className="h-[46px] text-center leading-[46px]" onClick={handleItemClick} key={index}>
              {item.label}
              {options.length - 1 !== index && <hr className="bg-gray-20" />}
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}
export default Dropdown;
