import Link from "next/link";
import LoginForm from "./login-form";

function Login() {
  return (
    <>
      <LoginForm />
      <nav>
        <span className="text-base font-normal leading-5 text-instruction">
          회원이 아니신가요?{" "}
        </span>
        <Link href="/signup" className="cursor-pointer text-link underline">
          회원가입하기
        </Link>
      </nav>
    </>
  );
}

export default Login;
