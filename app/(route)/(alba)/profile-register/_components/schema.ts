import { ADDRESS, AddressType } from "@/app/_constants/address";
import * as yup from "yup";
const errorMessage = "필수로 입력해야 하는 사항입니다.";
export const profileRegisterSchema = yup.object().shape({
  name: yup.string().required(errorMessage),
  phone: yup
    .string()
    .matches(/^010-\d{4}-\d{4}$/, "번호 형식은 010-1234-5678으로 해주세요")
    .required(errorMessage),
  address: yup
    .mixed<AddressType>()
    .oneOf(ADDRESS, errorMessage)
    .required(errorMessage),
  bio: yup.string().required(errorMessage),
});
