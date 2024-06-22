"use client";

import React from "react";
import { useState } from "react";
import Image from "next/image";

import close from "@/public/icons/close.png";
import closeRed40 from "@/public/icons/close-red-40.png";

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
      <div>
        <h2>상세 필터</h2>
        <Image src={close} alt="닫기" width={24} height={24} />
      </div>
      <h3>위치</h3>
      <div>
        {/* 주소 목록 */}
        {addressList.map((address) => (
          <div key={address} onClick={() => handleAddressClick(address)}>
            {address}
          </div>
        ))}
      </div>
      <div>
        {/* 선택된 주소 목록 */}
        {selectedAddresses.map((address) => (
          <div key={address}>{address}</div>
        ))}
        <div>
          <p>서울시 강남구</p>
          <Image src={closeRed40} alt="닫기" width={16} height={16} />
        </div>
      </div>
      <div>
        <p>시작일</p>
        <input placeholder='입력'></input>
      </div>
      <div>
        <p>금액</p>
        <input placeholder='입력'></input> 이상부터
      </div>
      <div>여기 버튼 두개 넣는 자리</div>
    </>
  );
}
