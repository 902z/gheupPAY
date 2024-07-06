import { LinkButton } from "@/app/_components/button";
import errorImage from "@/public/images/warning.png";
import Image from "next/image";

function ErrorSign() {
  return (
    <div className="mt-10 flex flex-col items-center justify-center">
      <Image alt="404" src={errorImage} width={600} />
      <h1 className="pt-4 font-bold text-2xl">오류가 발생했어요</h1>
      <p className="pb-4">다시 시도해주세요</p>
      <LinkButton
        href="/notice-list"
        btnColor="orange"
        className="w-fit px-12 md:px-20"
      >
        홈으로 가기
      </LinkButton>
    </div>
  );
}

export default ErrorSign;
