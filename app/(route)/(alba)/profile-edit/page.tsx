"use client";

import { AddressType } from "@/app/_constants/address";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CreateProfileForm from "@/app/(route)/(alba)/profile-register/_components/form";
import { getUser } from "@/app/_apis/user";
interface InitialData {
  name: string;
  phone: string;
  address: AddressType;
  bio: string;
}

export default function ShopEdit() {
  const searchParams = useSearchParams();
  const userId = searchParams.get("userId");
  const [initialData, setInitialData] = useState<InitialData>();

  useEffect(() => {
    const getUserInfo = async () => {
      try {
        if (userId) {
          const userDetail = await getUser(userId);
          const formValue: InitialData = {
            name: userDetail.item.name,
            phone: userDetail.item.phone,
            address: userDetail.item.address,
            bio: userDetail.item.bio,
          };
          setInitialData(formValue);
        } else {
          throw new Error("프로필을 찾지 못했습니다.");
        }
      } catch (error) {
        if (error instanceof Error) {
          throw new Error("기존의 데이터를 불러올 수 없습니다.");
        }
      }
    };
    getUserInfo();
  }, []);

  return initialData && <CreateProfileForm initialData={initialData} />;
}
