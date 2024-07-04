import MyShopDetailCard from "./_components/my-shop-detail-card";
import { getUser } from "@/app/_apis/user";
import { getCookie } from "@/app/_util/cookie";
import PostedNotice from "./_components/posted-notice";
import NoneSignButton from "@/app/_components/none-sign-button";
import { getShopNoticeList } from "@/app/_apis/notice";
import { redirect } from "next/navigation";

async function ShopDetail() {
  const user_id = await getCookie("userId");
  if (!user_id) return await redirect("/login");

  const userProfileDetail = await getUser(user_id);
  if (!userProfileDetail.item.shop) {
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

  const noticesList = await getShopNoticeList({
    shop_id: userProfileDetail.item.shop.item.id,
  });

  return (
    <section className="mb-20 md:mb-[120px]">
      <MyShopDetailCard
        imageUrl={userProfileDetail.item.shop.item.imageUrl}
        name={userProfileDetail.item.shop.item.name}
        address1={userProfileDetail.item.shop.item.address1}
        description={userProfileDetail.item.shop.item.description}
        shopId={userProfileDetail.item.shop.item.id}
      />
      {noticesList.count ? (
        <>
          <h2 className="py-8 font-bold text-l md:text-2xl">
            내가 등록한 공고
          </h2>
          <PostedNotice
            shop={userProfileDetail.item.shop}
            initialList={noticesList}
          />
        </>
      ) : (
        <>
          <h2 className="py-8 font-bold text-l md:text-2xl">등록한 공고</h2>
          <NoneSignButton
            signText="공고를 등록해 보세요"
            btnHref="/admin/notice-create"
            BtnText="공고 등록하기"
          />
        </>
      )}
    </section>
  );
}

export default ShopDetail;
