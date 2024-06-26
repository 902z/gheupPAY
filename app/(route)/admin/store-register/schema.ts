import * as yup from "yup";
import { loginErrorMessages } from "@/app/_constants/validation-text";
import {
  MINIMUM_HOURLY_WAGE,
  MAXIMUM_HOURLY_WAGE,
} from "@/app/_constants/hourly-wage";

const errorMessage = "필수 입력";
export const storeRegisterSchema = yup.object().shape({
  name: yup.string().required(errorMessage),
  category: yup.string().required(errorMessage),
  address1: yup.string().required(errorMessage),
  address2: yup.string().required(errorMessage),
  description: yup.string().required(errorMessage),
  originalHourlyPay: yup.string().required(errorMessage),
  imageUrl: yup.string(),
});
