"use client";

import React from "react";
import { useState } from "react";

const addressList = [
  "서울시 종로구",
  "서울시 중구",
  "서울시 용산구",
  "서울시 성동구",
  "서울시 광진구",
  "서울시 동대문구",
  "서울시 중랑구",
  "서울시 성북구",
  "서울시 강북구",
  "서울시 도봉구",
  "서울시 노원구",
  "서울시 은평구",
  "서울시 서대문구",
  "서울시 마포구",
  "서울시 양천구",
  "서울시 강서구",
  "서울시 구로구",
  "서울시 금천구",
  "서울시 영등포구",
  "서울시 동작구",
  "서울시 관악구",
  "서울시 서초구",
  "서울시 강남구",
  "서울시 송파구",
  "서울시 강동구",
].sort();

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
      <div className="ml-[20px] w-[390px] border border-black px-[20px] py-[24px]">
        <div className="mb-[24px] flex justify-between font-bold text-l">
          <h2>상세 필터</h2>
          <div className="cursor-pointer">×</div>
        </div>
        <div className="w-[350px] border-b pb-[24px]">
          <h3>위치</h3>
          <div className="my-[12px] grid h-[258px] w-[350px] grid-cols-2 overflow-scroll rounded-[6px] border border-gray-20 px-[20px] px-[28px] text-m">
            {addressList.map((address) => (
              <div
                className="mt-[20px] w-[94px] cursor-pointer"
                key={address}
                onClick={() => handleAddressClick(address)}
              >
                {address}
              </div>
            ))}
          </div>
          <div>
            <div className="flex flex-wrap gap-[8px]">
              {selectedAddresses.map((address) => (
                <div
                  className="flex justify-between gap-[4px] rounded-[20px] bg-red-10 px-[10px] px-[7px] py-[6px] text-m text-red-40"
                  key={address}
                >
                  {address}
                  <div className="cursor-pointer">×</div>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="mt-[24px] h-[92px] w-[350px]">
          <p className="mb-[8px]">시작일</p>
          <input
            className="h-[58px] w-[350px] rounded-[6px] border border-gray-30 px-[20px] py-[16px]"
            placeholder="입력"
          ></input>
        </div>
        <div className="mt-[24px] h-[92px] w-[350px] border-t-2 border-gray-10">
          <p className="mb-[8px] mt-[24px]">금액</p>
          <div className="relative flex">
            <input
              className="h-[58px] w-[169px] rounded-[6px] border border-gray-30 px-[20px] py-[16px]"
              placeholder="입력"
            ></input>
            <p className="mx-[12px] my-[16px]">이상부터</p>
            <p className="absolute left-[134px] top-[16px]">원</p>
          </div>
        </div>
        {/* 공통 컴포넌트- 버튼 넣을 자리 */}
        <div className="mt-[56px] flex h-[48px] gap-[8px] border">
          <div className="h-[48px] w-[82px] rounded-[6px] border-2 border-red-40 pt-[12px] text-center font-bold text-red-40">
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
