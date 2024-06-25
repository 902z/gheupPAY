import Image from "next/image";
import Link from "next/link";

interface HeaderLoginProps {
  onClick: () => void;
}

export function HeaderNotLogin({ onClick }: HeaderLoginProps) {
  return (
    <>
      <section>
        <button onClick={onClick}>로그인</button>
        {/* <Link href="/login">로그인</Link> */}
      </section>
      <section>
        <Link href="/signup">회원가입</Link>
      </section>
    </>
  );
}
