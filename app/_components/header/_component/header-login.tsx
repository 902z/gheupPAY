import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search-bar";

interface HeaderLoginProps {
  onClick: () => void;
  type: "employer" | "employee";
}

export default function HeaderLogin({ onClick, type }: HeaderLoginProps) {
  return (
    <>
      <Image src="/images/logo.png" alt="Logo" width={133} height={43} />
      <nav>
        <ul>
          <li>
            {type === "employer" ? (
              <Link href="/admin/store-detail">내 가게</Link>
            ) : (
              <Link href="/profile-detail">내 프로필</Link>
            )}
          </li>
          <SearchBar />
          <button onClick={onClick}>로그아웃</button>
          <li>
            <Image
              src="/icons/noti-none.png"
              alt="notification"
              width={24}
              height={24}
            />
          </li>
        </ul>
      </nav>
    </>
  );
}
