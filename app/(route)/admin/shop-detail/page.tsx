import MyShopDetailCard from "./_components/my-shop-detail-card";
import NoneNotice from "./_components/none-notice";
import { getUser } from "@/app/_apis/user";
import { getCookie } from "@/app/_util/cookie";
import PostedNotice from "./_components/posted-notice";
import NoneSignButton from "@/app/_components/none-sign-button";

async function ShopDetail() {
  const user_id = await getCookie("userId");
  const userProfileDetail = await getUser(user_id!);

  if (userProfileDetail.item.shop) {
    return (
      <>
        <MyShopDetailCard
          imageUrl={userProfileDetail.item.shop.item.imageUrl}
          name={userProfileDetail.item.shop.item.name}
          address1={userProfileDetail.item.shop.item.address1}
          description={userProfileDetail.item.shop.item.description}
        />
        <PostedNotice shop_id={userProfileDetail.item.shop.item.id} />
      </>
    );
  } else {
    return (
      <NoneSignButton
        signText="내 가게를 소개하고 공고도 등록해 보세요"
        btnHref="/admin/shop-create"
        BtnText="가게 등록하기"
      />
    );
  }
}

export default ShopDetail;
