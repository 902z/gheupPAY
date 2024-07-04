import { getShopNoticeList } from "@/app/_apis/notice";
import { GetUsersUserId } from "@/app/_apis/type";
import NoneSignButton from "@/app/_components/none-sign-button";
import NoticeCard from "@/app/_components/notice-card";

interface PostedNoticeProp {
  shop: GetUsersUserId["item"]["shop"];
}

async function PostedNotice({ shop }: PostedNoticeProp) {
  if (!shop) return;

  const PostedNoticeList = await getShopNoticeList({ shop_id: shop.item.id });

  if (PostedNoticeList.count) {
    return (
      <>
        <h2 className="py-8 font-bold text-l md:text-2xl">내가 등록한 공고</h2>
        <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
          {PostedNoticeList.items.map((notice) => (
            <NoticeCard
              noticeId={notice.item.id}
              address1={shop.item.address1}
              closed={notice.item.closed}
              shopId={shop.item.id}
              hourlyPay={notice.item.hourlyPay}
              imageUrl={shop.item.imageUrl}
              name={shop.item.name}
              startsAt={notice.item.startsAt}
              workhour={notice.item.workhour}
            />
          ))}
        </div>
      </>
    );
  } else {
    return (
      <>
        <h2 className="py-8 font-bold text-l md:text-2xl">등록한 공고</h2>
        <NoneSignButton
          signText="공고를 등록해 보세요"
          btnHref="/admin/notice-create"
          BtnText="공고 등록하기"
        />
      </>
    );
  }
}

export default PostedNotice;
