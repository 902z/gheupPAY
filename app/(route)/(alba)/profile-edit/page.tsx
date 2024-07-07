import { AddressType } from "@/app/_constants/address";
import CreateProfileForm from "@/app/(route)/(alba)/profile-register/_components/form";
import { getUser } from "@/app/_apis/user";
interface InitialData {
  name: string;
  phone: string;
  address: AddressType;
  bio: string;
}
interface SearchParamsProps {
  searchParams: {
    userId: string;
  };
}

export default async function ProfileEdit({ searchParams }: SearchParamsProps) {
  const userId = searchParams.userId;
  const userDetail = await getUser(userId);
  const formValue: InitialData = {
    name: userDetail.item.name,
    phone: userDetail.item.phone,
    address: userDetail.item.address,
    bio: userDetail.item.bio,
  };

  return <CreateProfileForm initialData={formValue} />;
}
