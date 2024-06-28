import Link from "next/link";

export function HeaderNotLogin() {
  return (
    <>
      <section>
        <Link href="/login">로그인</Link>
      </section>
      <section>
        <Link href="/signup">회원가입</Link>
      </section>
    </>
  );
}
