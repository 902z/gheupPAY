import { LinkButton } from "@/app/_components/button";
import React from "react";

interface NoneSignButtonProp {
  signText: string;
  btnHref: string;
  BtnText: string;
}
/**
 * 
 * 공고 및 가게 없음 안내
 * @example
 *<NoneSignButton
    signText="내 가게를 소개하고 공고도 등록해 보세요"
    btnHref="/admin/shop-create"
    BtnText="가게 등록하기"
   />
  * @param  signText 안내 문구
  * @param  btnHref 버튼 클릭시 이동할 url
  * @param  BtnText 버튼 안 글자
  *  @author ☯️채종민
 */
function NoneSignButton({ signText, btnHref, BtnText }: NoneSignButtonProp) {
  return (
    <div className="flex flex-col items-center justify-center rounded-xl border border-gray-20 px-40 py-10 md:px-60">
      <p className="my-8 text-m">{signText}</p>
      <LinkButton href={btnHref} btnColor="orange" className="font-bold">
        {BtnText}
      </LinkButton>
    </div>
  );
}

export default NoneSignButton;
