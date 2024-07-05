import { getShopNoticeList } from "@/app/_apis/notice";
import { GetUsersUserId } from "@/app/_apis/type";
import PostedNotice from "../posted-notice";
import NoneSignButton from "@/app/_components/none-sign-button";

interface IsRegisterComponentProps {
  id: string;
  shop: GetUsersUserId["item"]["shop"];
}

export default async function IsRegisterComponent({
  id,
  shop,
}: IsRegisterComponentProps) {
  const noticesList = await getShopNoticeList({
    shop_id: id,
  });
  return (
    <>
      {noticesList.count ? (
        <PostedNotice shop={shop} initialList={noticesList} />
      ) : (
        <NoneSignButton
          signText="공고를 등록해 보세요"
          btnHref="/admin/notice-create"
          BtnText="공고 등록하기"
        />
      )}
    </>
  );
}
