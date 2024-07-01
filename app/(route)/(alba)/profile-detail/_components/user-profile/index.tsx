import { UserProfileData } from "@/app/_apis/type";
import Button from "@/app/_components/button";
import Image from "next/image";
import React from "react";
import mapPin from "@/public/icons/map-pin.png";
import phone from "@/public/icons/phone.png";

type UserProfileProps = {
  userProfile: UserProfileData;
};

export default function UserProfile({ userProfile }: UserProfileProps) {
  return (
    <div>
      <div className="box-border flex h-fit w-full flex-col rounded-[12px] bg-red-10 p-5">
        <div className="flex items-center">
          <h3 className="flex-1 font-bold text-m text-primary">이름</h3>
          <Button btnColor="white" className="w-[108px] md:w-[169px]">
            편집하기
          </Button>
        </div>
        <data className="font-bold text-xl">{userProfile.item.name}</data>
        <div className="flex items-center gap-1">
          <Image src={phone} alt="장소" width={20} height={20} />
          <data className="py-2 text-s text-gray-50 md:text-m">
            {userProfile.item.phone}
          </data>
        </div>
        <div className="flex items-center gap-1">
          <Image src={mapPin} alt="장소" width={20} height={20} />
          <data className="py-2 text-s text-gray-50 md:text-m">
            선호 지역: {userProfile.item.address}
          </data>
        </div>
        <div className="break-words py-4 text-m">
          <p>{userProfile.item.bio}</p>
        </div>
      </div>
    </div>
  );
}
