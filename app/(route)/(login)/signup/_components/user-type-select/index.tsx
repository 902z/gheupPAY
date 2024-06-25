import { USER_TYPE } from "@/app/_constants/user-type";
import UserTypeRadio from "../user-type-radio";
import { UseFormRegisterReturn } from "react-hook-form";

interface UserTypeSelectPropType {
  register: UseFormRegisterReturn;
}

function UserTypeSelect({ register }: UserTypeSelectPropType) {
  const { EMPLOYEE, EMPLOYER } = USER_TYPE;
  return (
    <fieldset>
      <legend className="mb-2 text-start text-base font-normal leading-[26px] text-black">회원 유형</legend>
      <div className="flex gap-4">
        <UserTypeRadio register={register} value={EMPLOYEE} defaultChecked>
          알바님
        </UserTypeRadio>
        <UserTypeRadio register={register} value={EMPLOYER}>
          사장님
        </UserTypeRadio>
      </div>
    </fieldset>
  );
}

export default UserTypeSelect;
