import * as yup from "yup";
const errorMessage = "필수로 입력해야 하는 사항입니다.";
export const storeNoticeRegisterSchema = yup.object().shape({
  hourlyPay: yup.string().required(errorMessage),
  startsAt: yup.string().required(errorMessage),
  workhour: yup
    .number()
    .required(errorMessage)
    .max(12, "12시간 이하로 입력해주세요.")
    .typeError("숫자만 입력해주세요."),
  description: yup.string().required(errorMessage),
});
