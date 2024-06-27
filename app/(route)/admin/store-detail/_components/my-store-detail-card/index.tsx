import Image from "next/image";
import React from "react";
import mapPin from "@/public/icons/map-pin.png";
import Button from "@/app/_components/button";

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
      <div className="box-border flex h-fit w-full flex-col rounded-[12px] bg-red-10 p-5 lg:flex-row lg:gap-4">
        <div className="relative mb-2 box-border h-[180px] w-full rounded-[12px] lg:h-[308px] lg:w-[539px]">
          <Image
            alt=""
            src={shopDetail.item.imageUrl}
            fill={true}
            layout="fill"
            objectFit="cover"
            className="rounded-[12px]"
          />
        </div>
        <div className="relative flex-1 px-1 lg:flex lg:flex-col lg:items-stretch lg:py-3">
          <div className="lg:flex-1">
            <h3 className="font-bold text-m text-primary">식당</h3>
            <data className="font-bold text-xl">{shopDetail.item.name}</data>
            <div className="flex items-center gap-1">
              <Image src={mapPin} alt="장소" width={20} height={20} />
              <data className="py-2 text-s text-gray-50 md:text-m">
                {shopDetail.item.address1}
              </data>
            </div>
            <div className="break-words py-4 text-m">
              <p>{shopDetail.item.description}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <Button btnColor="white" className="font-bold">
              편집하기
            </Button>
            <Button btnColor="orange" className="font-bold">
              공고 등록하기
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
