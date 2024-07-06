import MyShopDetailCard from "./_components/my-shop-detail-card";
import { getUser } from "@/app/_apis/user";
import { getCookie } from "@/app/_util/cookie";
import NoneSignButton from "@/app/_components/none-sign-button";
import { redirect } from "next/navigation";
import IsRegisterComponent from "./_components/is-register-component";
import { Suspense } from "react";
import { NoticeCardSkeleton } from "@/app/_components/notice-card/_component/skeleton";

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

  return (
    <section className="mb-20 md:mb-[120px]">
      <MyShopDetailCard
        imageUrl={userProfileDetail.item.shop.item.imageUrl}
        name={userProfileDetail.item.shop.item.name}
        category={userProfileDetail.item.shop.item.category}
        address1={userProfileDetail.item.shop.item.address1}
        description={userProfileDetail.item.shop.item.description}
        shopId={userProfileDetail.item.shop.item.id}
      />
      <h2 className="py-8 font-bold text-l md:text-2xl">내가 등록한 공고</h2>
      <Suspense
        fallback={
          <div className="grid grid-cols-2 gap-4 lg:grid-cols-3">
            {[1, 2, 3, 4, 5, 6].map((index) => (
              <NoticeCardSkeleton key={index} />
            ))}
          </div>
        }
      >
        <IsRegisterComponent
          id={userProfileDetail.item.shop.item.id}
          shop={userProfileDetail.item.shop}
        />
      </Suspense>
    </section>
  );
}

export default ShopDetail;
