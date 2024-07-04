"use client";
import { getShopDetail } from "@/app/_apis/shop";
import { AddressType } from "@/app/_constants/address";
import { useSearchParams } from "next/navigation";
import { useEffect, useState } from "react";
import CreateProfileForm from "@/app/(route)/(alba)/profile-register/_components/form";
import ErrorSign from "@/app/_components/error-sign";
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
  const [failed, setFailed] = useState(false);

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
        setFailed(true);
        if (error instanceof Error) {
          throw new Error("기존의 데이터를 불러올 수 없습니다.");
        }
      }
    };
    getUserInfo();
  }, []);

  return failed ? (
    <ErrorSign />
  ) : (
    initialData && <CreateProfileForm initialData={initialData} />
  );
}
