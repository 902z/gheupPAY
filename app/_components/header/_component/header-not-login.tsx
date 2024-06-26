import Link from "next/link";
interface HeaderNotLoginProps {
  login: (userId: string, type: "employer" | "employee") => void;
}

export function HeaderNotLogin({ login }: HeaderNotLoginProps) {
  const handleClick = () => {
    login("user", "employer");
  };
  return (
    <>
      <section>
        <button onClick={handleClick}>로그인</button>
        {/* <Link href="/login">로그인</Link> */}
      </section>
      <section>
        <Link href="/signup">회원가입</Link>
      </section>
    </>
  );
}
