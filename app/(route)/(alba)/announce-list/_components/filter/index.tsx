"use client";

import React, {useState} from "react";
import Image from 'next/image';

import close from "@/public/icons/close.png";
import closeRed40 from "@/public/icons/close-red-40.png"
import { ADDRESS } from '@/constants/address';

export default function Filter() {
  const [selectedAddresses, setSelectedAddresses] = useState<string[]>([]);
  const handleAddressClick = (address: string) => {
    setSelectedAddresses((prev) => {
      if (!prev.includes(address)) {
        return [...prev, address];
      }
      return prev;
    });
  };
  return (
    <>
      <div className="ml-[20px] w-[390px] border border-gray-20 rounded-[10px] shadow px-[20px] py-[24px]">
        <div className="mb-[24px] flex justify-between font-bold text-l">
          <h2>상세 필터</h2>
          <Image className='cursor-pointer w-[24px] h-[24px]' src={close} alt="닫기" width={24} />
        </div>
        <div className="w-[350px] border-b pb-[24px]">
          <h3>위치</h3>
          <ul className="my-[12px] grid h-[258px] w-[350px] grid-cols-2 overflow-x-hidden overflow-scroll rounded-[6px] border border-gray-20 px-[20px] px-[28px] text-m ">
            {ADDRESS.map((address) => (
              <li
                className="mt-[20px] w-[94px] cursor-pointer"
                key={address}
                onClick={() => handleAddressClick(address)}
              >
                {address}
              </li>
            ))}
          </ul>
          <div>
            <ul className="flex flex-wrap gap-[8px]">
              {selectedAddresses.map((address) => (
                <li
                  className="flex justify-between gap-[4px] rounded-[20px] bg-red-10 px-[10px] px-[7px] py-[6px] text-m text-red-40"
                  key={address}
                >
                  {address}
                  <Image className='cursor-pointer w-[16px] h-[16px] mt-[2px]' src={closeRed40} alt="닫기" width={24} />
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="mt-[24px] h-[92px] w-[350px]">
          <p className="mb-[8px]">시작일</p>
          <input
            className="h-[58px] w-[350px] rounded-[6px] border border-gray-30 px-[20px] py-[16px] focus:outline-primary"
            placeholder="입력"
          ></input>
        </div>
        <div className="mt-[24px] h-[92px] w-[350px] border-t-2 border-gray-10">
          <p className="mb-[8px] mt-[24px]">금액</p>
          <div className="relative flex">
            <input
              className="h-[58px] w-[169px] rounded-[6px] border border-gray-30 px-[20px] py-[16px] focus:outline-primary"
              placeholder="입력"
            ></input>
            <p className="mx-[12px] my-[16px]">이상부터</p>
            <p className="absolute left-[134px] top-[16px]">원</p>
          </div>
        </div>
        {/* 공통 컴포넌트- 버튼 넣을 자리 */}
        <div className="mt-[56px] flex h-[48px] gap-[8px]">
          <div className="h-[48px] w-[82px] rounded-[6px] border-[1px] border-red-40 pt-[12px] text-center font-bold text-red-40">
            초기화
          </div>
          <div className="h-[48px] w-[260px] rounded-[6px] border bg-red-40 pt-[14px] text-center font-bold text-white">
            적용하기
          </div>
        </div>
      </div>
    </>
  );
}
