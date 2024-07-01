import * as yup from "yup";
const errorMessage = "필수로 입력해야 하는 사항입니다.";
export const storeRegisterSchema = yup.object().shape({
  name: yup.string().required(errorMessage),
  category: yup.string().required(errorMessage),
  address1: yup.string().required(errorMessage),
  address2: yup.string().required(errorMessage),
  description: yup.string().required(errorMessage),
  originalHourlyPay: yup.string().required(errorMessage),
  imageUrl: yup.string(),
});
