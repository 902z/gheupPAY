import Image from "next/image";
import Link from "next/link";
import SearchBar from "./search-bar";

interface HeaderLoginProps {
  onClick: () => void;
}

export function HeaderNotLogin({ onClick }: HeaderLoginProps) {
  return (
    <>
      <Image src="/images/logo.png" alt="Logo" width={133} height={43} />
      <nav>
        <ul>
          <li>
            <button onClick={onClick}>로그인</button>
            {/* <Link href="/login">로그인</Link> */}
          </li>
          <SearchBar />
          <li>
            <Link href="/signup">회원가입</Link>
          </li>
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
