import React from "react";
import MyShopDetailCard from "./_components/my-shop-detail-card";
import NoneNotice from "./_components/none-notice";
import { getShopDetail } from "@/app/_apis/shop";
import { LinkButton } from "@/app/_components/button";

export const metadata = {
  title: "내 가게 상세",
};

export default async function ShopDetail() {
  const shopId = "4490151c-5217-4157-b072-9c37b05bed47";
  const shopDetail = await getShopDetail(shopId);
  // const userId = await getCookie("userId");
  // if (!userId) return;

  // const userInfo = await getUserInfo<UserInfo>(userId);
  // const shopId = userInfo.item.shop?.item.id;
  // if (shopId) {
  //   const shopInfo = await getShopInfo<ShopInfo>(shopId);
  //   console.log(shopInfo);
  // }

  if (!shopId) {
    return (
      <div className="base-container">
        <div className="flex h-[275px] flex-col items-center justify-center">
          {!shopId && (
            <div className="max-w-[346px]">
              내 가게를 소개하고 공고도 등록해 보세요{" "}
              <LinkButton
                href="/admin/shop-register"
                btnColor="orange"
                className="mt-6 font-bold"
              >
                가게등록하기
              </LinkButton>
            </div>
          )}
        </div>
      </div>
    );
  } else {
    return (
      <>
        <div className="base-container">
          <h2 className="pb-4 pt-[40px] font-bold text-l md:text-2xl">
            내 가게
          </h2>
          <MyShopDetailCard shopDetail={shopDetail} />
          <div className="pb-[120px]">
            <h2 className="pb-8 pt-[60px] font-bold text-l md:text-2xl">
              등록한 공고
            </h2>
            <NoneNotice shopId={shopId} />
          </div>
        </div>
      </>
    );
  }
}
