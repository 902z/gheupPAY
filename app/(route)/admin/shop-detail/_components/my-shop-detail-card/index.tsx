import Image from "next/image";
import React from "react";
import mapPin from "@/public/icons/map-pin.png";
import Button, { LinkButton } from "@/app/_components/button";

interface MyShopDetailCardProps {
  imageUrl: string;
  name: string;
  address1: string;
  description: string;
  shopId: string;
}

export default function MyShopDetailCard({
  imageUrl,
  name,
  address1,
  description,
  shopId,
}: MyShopDetailCardProps) {
  return (
    <div className="pb-[60px]">
      <div className="box-border flex h-fit w-full flex-col rounded-[12px] bg-red-10 p-5 lg:flex-row lg:gap-4">
        <div className="relative mb-2 box-border h-[180px] w-full rounded-[12px] lg:h-[308px] lg:w-[539px]">
          <Image
            alt=""
            src={imageUrl}
            fill={true}
            sizes="100% 100%"
            className="rounded-[12px] object-cover"
          />
        </div>
        <div className="relative flex-1 px-1 lg:flex lg:flex-col lg:items-stretch lg:py-3">
          <div className="lg:flex-1">
            <h3 className="font-bold text-m text-primary">식당</h3>
            <data className="font-bold text-xl">{name}</data>
            <div className="flex items-center gap-1">
              <Image src={mapPin} alt="장소" width={20} height={20} />
              <data className="py-2 text-s text-gray-50 md:text-m">
                {address1}
              </data>
            </div>
            <div className="break-words py-4 text-m">
              <p>{description}</p>
            </div>
          </div>
          <div className="flex items-center justify-center gap-4">
            <LinkButton
              href={`/admin/shop-edit?shopId=${shopId}`}
              btnColor="white"
              className="font-bold"
            >
              편집하기
            </LinkButton>
            <LinkButton
              href="/admin/notice-create"
              btnColor="orange"
              className="font-bold"
            >
              공고 등록하기
            </LinkButton>
          </div>
        </div>
      </div>
    </div>
  );
}
