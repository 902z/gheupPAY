import Image from "next/image";
import { motion } from "framer-motion";
import check from "@/public/icons/check.png";
import uncheck from "@/public/icons/uncheck.png";
import { UserType } from "@/constants/user-type";
interface UseTypeButtonPropType {
  children: string;
  currentType: UserType;
  value: UserType;
  onClick: () => void;
}

function UserTypeButton({ children, value, currentType, onClick }: UseTypeButtonPropType) {
  return (
    <button
      onClick={onClick}
      className={`${
        currentType === value ? "border border-solid border-primary" : "border border-solid border-gray-30"
      } flex h-[50px] w-[167px] items-center gap-[9px] rounded-[30px] pl-[41px] text-m font-normal leading-[22px]`}
    >
      {currentType === value ? (
        <motion.div
          key="checked"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 1 }}
        >
          <Image src={check} alt="체크표시" />
        </motion.div>
      ) : (
        <motion.div key="unchecked" initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
          <Image src={uncheck} alt="체크표시" />
        </motion.div>
      )}

      {children}
    </button>
  );
}

export default UserTypeButton;
