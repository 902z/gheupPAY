import pulse from "@/public/icons/pulse.svg";
import Image from "next/image";

function LoginLoading() {
  return (
    <section className="mt-[50px] flex flex-col items-center">
      <Image src={pulse} alt="로딩 중" width={80} height={80} />
      <h2 className="font-bold text-primary">급페이~ 급페이~ 급페이</h2>
    </section>
  );
}

export default LoginLoading;
