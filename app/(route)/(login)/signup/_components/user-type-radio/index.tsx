import Image from "next/image";
import check from "@/public/icons/check.png";
import uncheck from "@/public/icons/uncheck.png";
import { InputHTMLAttributes } from "react";
import { UserType } from "@/app/_constants/user-type";
import { UseFormRegisterReturn } from "react-hook-form";

interface UseTypeButtonPropType extends InputHTMLAttributes<HTMLInputElement> {
  register: UseFormRegisterReturn;
  children: string;
  value: UserType;
}

function UserTypeRadio({ register, children, value, ...rest }: UseTypeButtonPropType) {
  return (
    <div className="relative flex w-full">
      <input id={value} className="peer hidden" type="radio" value={value} {...rest} {...register} />
      <Image
        src={check}
        alt="check"
        className="absolute left-[41px] top-[15px] hidden cursor-pointer peer-checked:block"
        width={20}
        height={20}
      />
      <Image
        src={uncheck}
        alt="uncheck"
        className="absolute left-[41px] top-[15px] block cursor-pointer peer-checked:hidden"
        width={20}
        height={20}
      />
      <label
        className="relative flex h-[50px] w-full max-w-[167px] cursor-pointer items-center rounded-[30px] border border-solid border-gray-30 pl-[70px] text-m font-normal leading-[22px] peer-checked:border-primary"
        htmlFor={value}
      >
        {children}
      </label>
    </div>
  );
}

export default UserTypeRadio;
