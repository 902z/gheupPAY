import useUserStore from "@/stores/create-store";
import Image from "next/image";
import Link from "next/link";
import AlertButton from "../../alert";

export default function HeaderLogin() {
  const logout = useUserStore((state) => state.logout);
  const type = useUserStore((state) => state.type);
  return (
    <>
      <section>
        {type === "employer" ? (
          <Link href="/admin/store-detail">내 가게</Link>
        ) : (
          <Link href="/profile-detail">내 프로필</Link>
        )}
      </section>
      <button onClick={logout}>로그아웃</button>
      <figure className="relative h-5 w-5 md:h-6 md:w-6">
        <AlertButton>
          <Image
            src="/icons/noti-none.png"
            alt="notification"
            width={24}
            height={24}
          />
        </AlertButton>
      </figure>
    </>
  );
}
