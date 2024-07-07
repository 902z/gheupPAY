"use client";
import { GetUsersUserIdApplications } from "@/app/_apis/type";
import {
  postShopsShopIdNoticesNoticeIdApplications,
  putShopsShopIdNoticesNoticeIdApplicationsApplicationId,
} from "@/app/_apis/application";
import OpenModal from "../../modals";
import Button, { LinkButton } from "../../button";
import { redirectAction } from "@/app/_actions";
import notification from "@/app/_util/notification";

interface RegisterButtonProps {
  type?: string;
  address?: string;
  userApplication: GetUsersUserIdApplications | null;
  shopId: string;
  noticeId: string;
}

export default function RegisterButton({
  address,
  userApplication,
  shopId,
  noticeId,
}: RegisterButtonProps) {
  if (userApplication === null) {
    return (
      <LinkButton className="" href={"/login"}>
        신청하기
      </LinkButton>
    );
  }

  const isRegister = userApplication.items.some((obj) => {
    return (
      obj.item.notice.item.id === noticeId && obj.item.status === "pending"
    );
  });

  const isRejected = userApplication.items.some((obj) => {
    return (
      obj.item.notice.item.id === noticeId && obj.item.status === "rejected"
    );
  });

  const handleCancel = async () => {
    const result = await putShopsShopIdNoticesNoticeIdApplicationsApplicationId(
      shopId,
      noticeId,
      userApplication.items[0].item.id,
      "canceled",
    );
    if (result) notification("신청이 취소되었습니다.", "info");
    await redirectAction(`/notice-detail/${shopId}/${noticeId}`);
  };

  const handleRegister = async () => {
    const result = await postShopsShopIdNoticesNoticeIdApplications(
      shopId,
      noticeId,
    );
    if (result) notification("신청이 완료되었습니다.", "info");
    await redirectAction(`/notice-detail/${shopId}/${noticeId}`);
  };

  if (isRegister) {
    return (
      <>
        <OpenModal
          select
          selectType="cancel"
          onClickYes={handleCancel}
          modalContents="신청을 취소하시겠습니까?"
        >
          <Button className="font-bold" btnColor="white">
            취소하기
          </Button>
        </OpenModal>
      </>
    );
  }

  if (isRejected) {
    return (
      <Button className="font-bold" btnColor="white" disabled>
        거절된 신청입니다.
      </Button>
    );
  }

  return (
    <>
      {address ? (
        <OpenModal
          modalContents="지원하시겠습니까?"
          select
          onClickYes={handleRegister}
          selectType="yes"
        >
          <Button className="font-bold">신청하기</Button>
        </OpenModal>
      ) : (
        <OpenModal
          modalContents="내 프로필을 먼저 등록해주세요"
          confirm
          onClick={async () => await redirectAction("/profile-register")}
        >
          <Button className="font-bold">신청하기</Button>
        </OpenModal>
      )}
    </>
  );
}
