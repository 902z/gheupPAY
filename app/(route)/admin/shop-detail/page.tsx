import MyShopDetailCard from "./_components/my-shop-detail-card";
import { getUser } from "@/app/_apis/user";
import { getCookie } from "@/app/_util/cookie";
import PostedNotice from "./_components/posted-notice";
import NoneSignButton from "@/app/_components/none-sign-button";

async function ShopDetail() {
  const user_id = await getCookie("userId");
  if (!user_id) return;
  const userProfileDetail = await getUser(user_id);
  if (userProfileDetail.item.shop) {
    return (
      <section className="mb-20 md:mb-[120px]">
        <MyShopDetailCard
          imageUrl={userProfileDetail.item.shop.item.imageUrl}
          name={userProfileDetail.item.shop.item.name}
          address1={userProfileDetail.item.shop.item.address1}
          description={userProfileDetail.item.shop.item.description}
          shopId={userProfileDetail.item.shop.item.id}
        />
        <PostedNotice shop={userProfileDetail.item.shop} />
      </section>
    );
  } else {
    return (
      <section className="mb-20 md:mb-[120px]">
        <NoneSignButton
          signText="내 가게를 소개하고 공고도 등록해 보세요"
          btnHref="/admin/shop-create"
          BtnText="가게 등록하기"
        />
      </section>
    );
  }
}

export default ShopDetail;
