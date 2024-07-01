import errorImage from "@/public/images/404.png";
import Image from "next/image";
import { LinkButton } from "./_components/button";

export const metadata = {
  title: "잘못된 경로입니다",
};
export default function NotFound() {
  return (
    <>
      <div className="base-container">
        <div className="mt-40 flex flex-col items-center justify-center">
          <Image alt="404" src={errorImage} width={600} />
          <h1 className="pt-4 font-bold text-2xl">
            페이지가 없거나 접근할 수 없어요
          </h1>
          <p className="pb-4">입력하신 주소가 맞는지 다시 확인해주세요</p>
          <LinkButton
            href="/notice-list"
            btnColor="orange"
            className="w-[200px]"
          >
            홈으로 가기
          </LinkButton>
        </div>
      </div>
    </>
  );
}
