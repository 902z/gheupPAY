import Link from "next/link";
import SignUPForm from "./sign-up-from";

function SignUP() {
  return (
    <>
      <SignUPForm />
      <nav>
        <span className="text-base font-normal leading-5 text-instruction">
          이미 가입 하셨나요?{" "}
        </span>
        <Link href="/login" className="cursor-pointer text-link underline">
          로그인하기
        </Link>
      </nav>
    </>
  );
}

export default SignUP;
