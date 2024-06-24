import * as yup from "yup";
import { loginErrorMessages } from "@/constants/error-message";

export const loginSchema = yup.object().shape({
  email: yup
    .string()
    .required(loginErrorMessages.EMAIL_REQUIRED)
    .matches(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/, loginErrorMessages.INVALID_EMAIL),
  password: yup.string().required(loginErrorMessages.PASSWORD_REQUIRED).min(8, loginErrorMessages.INVALID_PASSWORD),
});
export const signUpSchema = yup.object().shape({
  email: yup
    .string()
    .required(loginErrorMessages.EMAIL_REQUIRED)
    .matches(/^[A-Za-z0-9_\.\-]+@[A-Za-z0-9\-]+\.[A-Za-z0-9\-]+/, loginErrorMessages.INVALID_EMAIL),
  password: yup.string().required(loginErrorMessages.PASSWORD_REQUIRED).min(8, loginErrorMessages.INVALID_PASSWORD),
  passwordConfirm: yup
    .string()
    .required(loginErrorMessages.CONFIRM_PASSWORD_REQUIRED)
    .oneOf([yup.ref("password")], loginErrorMessages.PASSWORDS_MUST_MATCH),
});
