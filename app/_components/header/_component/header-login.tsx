import Image from "next/image";
import Link from "next/link";
import AlertButton from "./_component/alert";
import { getAlerts } from "@/app/_apis/alert";
import { getCookie } from "@/app/_util/cookie";
import { LogoutButton } from "./logout-button";

export default async function HeaderLogin() {
  const type = await getCookie("type");
  const initialAlerts = await getAlerts();
  // const initialAlerts = alertMockData;
  return (
    <>
      <section>
        {type === "employer" ? (
          <Link href="/admin/shop-detail">내 가게</Link>
        ) : (
          <Link href="/profile-detail">내 프로필</Link>
        )}
      </section>
      <LogoutButton />
      <figure className="relative h-5 w-5 md:h-6 md:w-6">
        <AlertButton initialAlerts={initialAlerts}>
          {initialAlerts.items.some((item) => item.item.read === false) ? (
            <Image
              src="/icons/noti-active.png"
              alt="notification"
              width={24}
              height={24}
            />
          ) : (
            <Image
              src="/icons/noti-none.png"
              alt="notification"
              width={24}
              height={24}
            />
          )}
        </AlertButton>
      </figure>
    </>
  );
}
