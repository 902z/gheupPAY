import Image from "next/image";
import Link from "next/link";
interface HeaderLoginProps {
  type: "employer" | "employee" | null;
  logout: () => void;
}
export default function HeaderLogin({ type, logout }: HeaderLoginProps) {
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
      <section className="relative h-5 w-5 md:h-6 md:w-6">
        <Image
          src="/icons/noti-none.png"
          alt="notification"
          width={24}
          height={24}
        />
      </section>
    </>
  );
}
