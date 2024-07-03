"use client";
import Link from "next/link";
import { GetUsersUserIdApplications } from "@/app/_apis/type";
import {
  postShopsShopIdNoticesNoticeIdApplications,
  putShopsShopIdNoticesNoticeIdApplicationsApplicationId,
} from "@/app/_apis/application";
import OpenModal from "../../modals";
import Button, { LinkButton } from "../../button";
import { redirect } from "next/navigation";

interface RegisterButtonProps {
  type?: string;
  address?: string;
  userApplication: GetUsersUserIdApplications;
  shopId: string;
  noticeId: string;
}

export default function RegisterButton({
  type,
  address,
  userApplication,
  shopId,
  noticeId,
}: RegisterButtonProps) {
  const isRegister = userApplication.items.some((obj) => {
    return obj.item.notice.item.id === noticeId;
  });

  const handleCancel = async () => {
    await putShopsShopIdNoticesNoticeIdApplicationsApplicationId(
      shopId,
      noticeId,
      userApplication.items[0].item.id,
      "canceled",
    );
  };

  if (!type) {
    return <Link href={"/login"}>신청하기</Link>;
  }

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

  if (type === "employer") {
    return (
      <Button className="font-bold" disabled>
        신청 불가
      </Button>
    );
  }

  return (
    <>
      {address ? (
        <Button
          className="font-bold"
          onClick={async () => {
            await postShopsShopIdNoticesNoticeIdApplications(shopId, noticeId);
          }}
        >
          신청하기
        </Button>
      ) : (
        <OpenModal
          modalContents="내 프로필을 먼저 등록해주세요"
          confirm
          onClick={async () => {
            redirect("/profile-register");
          }}
        >
          <Button className="font-bold">신청하기</Button>
        </OpenModal>
      )}
    </>
  );
}
