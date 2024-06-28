import * as yup from "yup";
import { loginErrorMessages } from "@/app/_constants/validation-text";
import { USER_TYPE } from "@/app/_constants/user-type";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required(loginErrorMessages.EMAIL_REQUIRED)
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, loginErrorMessages.INVALID_EMAIL),
  password: yup.string().required(loginErrorMessages.PASSWORD_REQUIRED).min(8, loginErrorMessages.INVALID_PASSWORD),
});
export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .required(loginErrorMessages.EMAIL_REQUIRED)
    .matches(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/, loginErrorMessages.INVALID_EMAIL),
  password: yup
    .string()
    .required(loginErrorMessages.PASSWORD_REQUIRED)
    .min(8, loginErrorMessages.INVALID_PASSWORD)
    .matches(/[A-Za-z]/, loginErrorMessages.INVALID_PASSWORD)
    .matches(/[0-9]/, loginErrorMessages.INVALID_PASSWORD),
  passwordConfirm: yup
    .string()
    .required(loginErrorMessages.CONFIRM_PASSWORD_REQUIRED)
    .oneOf([yup.ref("password")], loginErrorMessages.PASSWORDS_MUST_MATCH),
  type: yup.string().oneOf([USER_TYPE.EMPLOYEE, USER_TYPE.EMPLOYER]).required(),
});
