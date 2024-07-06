import { getShopDetail } from "@/app/_apis/shop";
import { AddressType } from "@/app/_constants/address";
import { CategoryType } from "@/app/_constants/category";
import ShopEditForm from "../../shop-edit/shop-edit-form";
import { numberWithCommas } from "@/app/_util/number-with-comma";

interface InitialData {
  name: string;
  category: CategoryType;
  address1: AddressType;
  address2: string;
  description: string;
  imageUrl: string;
  originalHourlyPay: string;
}
interface SearchParamsProps {
  searchParams: {
    shopId: string;
  };
}

export default async function ShopEdit({ searchParams }: SearchParamsProps) {
  const shopId = searchParams.shopId;
  const shopDetail = await getShopDetail(shopId);
  const formValue: InitialData = {
    name: shopDetail.item.name,
    category: shopDetail.item.category,
    address1: shopDetail.item.address1,
    address2: shopDetail.item.address2,
    description: shopDetail.item.description,
    imageUrl: shopDetail.item.imageUrl,
    originalHourlyPay: numberWithCommas(shopDetail.item.originalHourlyPay),
  };

  return <ShopEditForm shopId={shopId} initialData={formValue} />;
}
