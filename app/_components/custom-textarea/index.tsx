import { UseFormRegisterReturn } from "react-hook-form";

interface CustomTextareaProp {
  label: string;
  placeholder: string;
  register: UseFormRegisterReturn;
}

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
