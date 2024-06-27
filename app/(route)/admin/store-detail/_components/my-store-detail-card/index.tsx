import Image from "next/image";
import React from "react";
import mapPin from "@/public/icons/map-pin.png";

type ShopData = {
  shopDetail: {
    item: {
      id: string;
      name: string;
      category: string;
      address1: string;
      address2: string;
      description: string;
      imageUrl: string;
      originalHourlyPay: number;
      user: {
        item: {
          id: string;
          email: string;
          type: string;
        };
        href: string;
      };
    };
  };
};

export default function MyShopDetailCard({ shopDetail }: ShopData) {
  return (
    <div>
      <div className="h-[261px] w-full rounded-[12px] border border-gray-20 bg-white p-3 md:h-[349px] lg:w-[305px]">
        <div className="relative mb-2 box-border h-[82px] w-full rounded-[12px] md:h-[160px]">
          <Image
            alt=""
            src={shopDetail.item.imageUrl}
            fill={true}
            layout="fill"
            objectFit="cover"
            className="rounded-[12px]"
          />
        </div>
        <div className="px-1">
          <data className="font-bold md:text-l">{shopDetail.item.name}</data>
          <div className="flex items-center gap-1">
            <Image src={mapPin} alt="장소" width={20} height={20} />
            <data className="py-2 text-s text-gray-50 md:text-m">
              {shopDetail.item.address1}
            </data>
          </div>
        </div>
      </div>
    </div>
  );
}
