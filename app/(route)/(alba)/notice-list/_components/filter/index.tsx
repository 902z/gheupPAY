"use client";

import React, { useState } from "react";
import Image from "next/image";

import close from "@/public/icons/close.png";
import closeRed40 from "@/public/icons/close-red-40.png";
import { ADDRESS } from "@/app/_constants/address";
import Button from "@/app/_components/button";

interface FilterProps {
  onClose: () => void;
  onFilterChange: (addresses: string[], wage: string) => void;
}

export const numberWithCommas = (number: number) => {
  return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
};
//가게 등록 머지시 삭제할것

export default function Filter({ onClose,  onFilterChange }: FilterProps) {
  const [selectedAddresses, setSelectedAddresses] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>("");
  const [wage, setWage] = useState<string>("");

  // selectedAddresses: 선택된 주소들
  // startDate: 시작날짜
  // inputValue: input에 넣은 시급
  // isFocused: 시작날짜 받을때 focus 여부에 따라서 input type 변환<<placeholder때문에 사용

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleAddressClick = (address: string) => {
    setSelectedAddresses((prev) => {
      if (!prev.includes(address)) {
        const updatedAddresses = [...prev, address];
        return updatedAddresses;
      }
      return prev;
    });
  };

  const handleRemoveAddressClick = (address: string) => {
    setSelectedAddresses((prev) => prev.filter((item) => item !== address));
  };

  const handleReset = () => {
    setSelectedAddresses([]);
    setStartDate("");
    setWage("");
    onFilterChange(selectedAddresses, wage);
  };

  const handleInputChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const stringNumericValue = value.replace(/\D/g, "");
    const numericValue = Number(stringNumericValue);
    if (numericValue > 999999) {
      setWage("999,999");
    } else {
      setWage(numberWithCommas(numericValue));
    }
  };

  const handleDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    setStartDate(e.currentTarget.value);
  };

  const handleSubmit = () => {
    onFilterChange(selectedAddresses, wage);
    onClose();
  };

  return (
    <>
      <div className="absolute right-0 z-10 ml-[20px] mt-[38px] w-[390px] rounded-[10px] border border-gray-20 bg-white px-[20px] py-[24px] shadow">
        <div className="mb-[24px] flex justify-between font-bold text-l">
          <h2>상세 필터</h2>
          <Image
            className="h-[24px] w-[24px] cursor-pointer"
            src={close}
            alt="닫기"
            width={24}
            onClick={onClose}
          />
        </div>
        <div className="w-[350px] border-b pb-[24px]">
          <h3>위치</h3>
          <ul className="my-[12px] grid h-[258px] w-[350px] grid-cols-2 overflow-scroll overflow-x-hidden rounded-[6px] border border-gray-20 px-[28px] pb-[20px] text-m">
            {ADDRESS.map((address) => (
              <li className="grid grid-cols-2 text-m">
                <data
                  className="mt-[20px] w-[94px] cursor-pointer"
                  key={address}
                  onClick={() => handleAddressClick(address)}
                >
                  {address}
                </data>
              </li>
            ))}
          </ul>
          <div>
            <ul className="flex flex-wrap gap-[8px]">
              {selectedAddresses.map((address) => (
                <li>
                  <data
                    className="flex justify-between gap-[4px] rounded-[20px] bg-red-10 px-[10px] py-[6px] text-m text-red-40"
                    key={address}
                  >
                    {address}
                    <Image
                      className="mt-[2px] h-[16px] w-[16px] cursor-pointer"
                      src={closeRed40}
                      alt="닫기"
                      width={24}
                      onClick={() => handleRemoveAddressClick(address)}
                    />
                  </data>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <div className="relative mt-[24px] h-[92px] w-[350px]">
          <p className="mb-[8px]">시작일</p>
          <input
            className="h-[58px] w-[350px] rounded-[6px] border border-gray-30 px-[20px] py-[16px] focus:outline-primary"
            type={isFocused || startDate ? "datetime-local" : "text"}
            placeholder="입력"
            value={startDate}
            id="meeting-time"
            name="meeting-time"
            onChange={handleDateChange}
            onFocus={handleFocus}
            onBlur={handleBlur}
            style={{ color: startDate ? "black" : "transparent" }}
          />
        </div>
        <div className="mt-[24px] h-[92px] w-[350px] border-t-2 border-gray-10">
          <p className="mb-[8px] mt-[24px]">금액</p>
          <div className="relative flex">
            <input
              className="h-[58px] w-[169px] rounded-[6px] border border-gray-30 px-[20px] py-[16px] focus:outline-primary"
              placeholder="입력"
              type="text"
              value={wage}
              onInput={handleInputChange}
            />
            <p className="mx-[12px] my-[16px]">이상부터</p>
            <p className="absolute left-[134px] top-[16px]">원</p>
          </div>
        </div>
        <div className="mt-[56px] flex h-[48px] justify-between gap-[8px]">
          <Button className="w-28" color="white" onClick={handleReset}>
            초기화
          </Button>
          <Button className="" color="orange" onClick={handleSubmit}>
            적용하기
          </Button>
        </div>
      </div>
    </>
  );
}
