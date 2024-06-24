import Image from "next/image";
import { motion } from "framer-motion";
import check from "@/public/icons/check.png";
import uncheck from "@/public/icons/uncheck.png";
import { UserType } from "@/app/_constants/user-type";

interface UseTypeButtonPropType {
  children: string;
}

function UserTypeRadio({ children }: UseTypeButtonPropType) {
  return (
    <label>
      <input className="" type="radio" value="type" />
      {children}
    </label>
  );
}

export default UserTypeRadio;
