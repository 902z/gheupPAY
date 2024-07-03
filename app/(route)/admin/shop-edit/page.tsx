"use client";
import { getShopDetail } from "@/app/_apis/shop";
import { AddressType } from "@/app/_constants/address";
import { CategoryType } from "@/app/_constants/category";
import { useSearchParams } from "next/navigation";
import { Suspense, useEffect, useState } from "react";
import ShopEditForm from "./shop-edit-form";
import LoadingSign from "./loading";
interface InitialData {
  name: string;
  category: CategoryType;
  address1: AddressType;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: number;
}

export default function ShopEdit() {
  const searchParams = useSearchParams();
  const shop_id = searchParams.get("shop_id");
  console.log(shop_id);
  const [initialData, setInitialData] = useState<InitialData>();

  useEffect(() => {
    const getShopInfo = async () => {
      try {
        if (shop_id) {
          const shopDetail = await getShopDetail(shop_id);
          const formValue: InitialData = {
            name: shopDetail.item.name,
            category: shopDetail.item.category,
            address1: shopDetail.item.address1,
            address2: shopDetail.item.address2,
            description: shopDetail.item.description,
            imageUrl: shopDetail.item.imageUrl,
            originalHourlyPay: shopDetail.item.originalHourlyPay,
          };
          setInitialData(formValue);
        } else {
          throw new Error("가게를 찾지 못했습니다.");
        }
      } catch (error) {
        if (error instanceof Error) {
          throw new Error("기존의 데이터를 불러올 수 없습니다.");
        }
      }
    };
    getShopInfo();
  }, []);

  return (
    initialData && <ShopEditForm shop_id={shop_id!} initialData={initialData} />
  );
}
