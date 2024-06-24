import { USER_TYPE, UserType } from "@/app/_constants/user-type";
import UserTypeButton from "../user-type-button";
import UserTypeRadio from "../user-type-radio";

interface UserTypeSelectPropType {
  currentType: UserType;
  handleSelect: (type: UserType) => void;
}
function UserTypeSelect({ currentType, handleSelect }: UserTypeSelectPropType) {
  const { EMPLOYEE, EMPLOYER } = USER_TYPE;
  return (
    <div className="flex w-full flex-col gap-2">
      <label className="text-start text-base font-normal leading-[26px] text-black">회원 유형</label>
      <div className="flex gap-4">
        {/* <UserTypeButton
          value={EMPLOYEE}
          currentType={currentType}
          onClick={() => {
            handleSelect(EMPLOYEE);
          }}
        >
          알바님
        </UserTypeButton>
        <UserTypeButton
          value={EMPLOYER}
          currentType={currentType}
          onClick={() => {
            handleSelect(EMPLOYER);
          }}
        >
          사장님
        </UserTypeButton> */}
        <UserTypeRadio>알바님</UserTypeRadio>
        <UserTypeRadio>사장님</UserTypeRadio>
      </div>
    </div>
  );
}

export default UserTypeSelect;
