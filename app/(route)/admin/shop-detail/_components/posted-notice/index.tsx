import { getShopNoticeList } from "@/app/_apis/notice";
import { LinkButton } from "@/app/_components/button";
import NoneSignButton from "@/app/_components/none-sign-button";

interface PostedNoticeProp {
  shop_id: string;
}

async function PostedNotice({ shop_id }: PostedNoticeProp) {
  const PostedNoticeList = await getShopNoticeList({ shop_id });

  if (PostedNoticeList.count) {
    return (
      <>
        <h2 className="py-8 font-bold text-l md:text-2xl">내가 등록한 공고</h2>
        <div></div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="py-8 font-bold text-l md:text-2xl">등록한 공고</h2>
        <NoneSignButton
          signText="공고를 등록해 보세요"
          btnHref="/admin/shop-create"
          BtnText="가게 등록하기"
        />
      </>
    );
  }
}

export default PostedNotice;
