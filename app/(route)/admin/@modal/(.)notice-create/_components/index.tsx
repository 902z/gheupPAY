import { yupResolver } from "@hookform/resolvers/yup";
import { useParams, useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { storeNoticeRegisterSchema } from "./schema";
import CustomPriceInput from "@/app/_components/custom-price-input";
import CustomDateInput from "@/app/_components/custom-date-input";
import CustomTimeInput from "@/app/_components/custom-time-input";
import CustomTextarea from "@/app/_components/custom-textarea";
import Button from "@/app/_components/button";
import { postCreateNotice, putNoticeEdit } from "@/app/_apis/notice";
import ConfirmModal from "@/app/_components/modals/_components/confirm-modal";
import useModal from "@/app/_hooks/use-modal";

type postCreateNoticeParams = {
  hourlyPay: string;
  startsAt: string;
  workhour: number;
  description: string;
};
interface CreateNoticeFormProps {
  initialForm?: postCreateNoticeParams;
  shopId?: string;
  noticeId?: string;
}

export default function CreateNoticeForm({
  initialForm,
  shopId,
  noticeId,
}: CreateNoticeFormProps) {
  const { isOpen, closeModal, openModal } = useModal();
  const resolver = yupResolver(storeNoticeRegisterSchema);
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<postCreateNoticeParams>({
    resolver,
    mode: "onSubmit",
    defaultValues: {
      hourlyPay: initialForm?.hourlyPay,
      startsAt: initialForm?.startsAt,
      description: initialForm?.description,
      workhour: initialForm?.workhour,
    },
  });
  const onSubmit = async (data: postCreateNoticeParams) => {
    const hourlyPay = Number(data.hourlyPay.replace(/,/g, ""));
    const proceedData = {
      ...data,
      startsAt: new Date(data.startsAt).toISOString(),
      hourlyPay: hourlyPay,
    };
    let response;
    if (shopId && noticeId) {
      response = await putNoticeEdit(proceedData, shopId, noticeId);
    } else {
      response = await postCreateNotice(proceedData);
    }
    if (response) {
      openModal();
    }
  };
  const handleModalConfirm = () => {
    window.location.replace("/admin/shop-detail");
  };
  return (
    <>
      <form onSubmit={handleSubmit(onSubmit)}>
        <div className="flex flex-col gap-6">
          <div className="flex flex-col gap-5">
            <div className="grid gap-5 md:grid-cols-2 lg:grid-cols-3">
              <CustomPriceInput
                label="시급"
                displayRequiredMarker={true}
                register={register("hourlyPay")}
                errorMessage={errors.hourlyPay?.message}
              />
              <CustomDateInput
                label="시작일시"
                displayRequiredMarker={true}
                register={register("startsAt")}
                errorMessage={errors.startsAt?.message}
              />
              <CustomTimeInput
                label="업무 시간"
                displayRequiredMarker={true}
                register={register("workhour")}
                placeholder="12시간 이하로 입력해주세요."
                errorMessage={errors.workhour?.message}
              />
            </div>
            <CustomTextarea
              label="공고 설명"
              placeholder="공고 설명을 입력해 주세요"
              register={register("description")}
            />
          </div>
          <div className="flex justify-center">
            <Button className="max-w-[312px]" type="submit">
              등록하기
            </Button>
          </div>
        </div>
      </form>
      {isOpen && (
        <ConfirmModal closeModal={closeModal} onClick={handleModalConfirm}>
          등록이 완료되었습니다.
        </ConfirmModal>
      )}
    </>
  );
}
