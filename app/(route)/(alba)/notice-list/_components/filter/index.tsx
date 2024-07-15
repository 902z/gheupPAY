"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";

import close from "@/public/icons/close.png";
import closeRed40 from "@/public/icons/close-red-40.png";
import { ADDRESS } from "@/app/_constants/address";
import Button from "@/app/_components/button";
import { numberWithCommas } from "@/app/_util/number-with-comma";
import { getNow } from "@/app/_util/get-now";
import { useSearchParams, useRouter } from "next/navigation";

interface FilterProps {
  onClose: () => void;
}

export default function Filter({ onClose }: FilterProps) {
  const [selectedAddresses, setSelectedAddresses] = useState<string[]>([]);
  const [isFocused, setIsFocused] = useState<boolean>(false);
  const [startDate, setStartDate] = useState<string>("");
  const [minDate, setMinDate] = useState<string>("");
  const [wage, setWage] = useState<string>("");
  const searchParams = useSearchParams();
  const router = useRouter();
  const filterRef = useRef<HTMLFormElement>(null);

  useEffect(() => {
    setMinDate(getNow());

    const handleClickOutside = (event: MouseEvent) => {
      if (
        filterRef.current &&
        !filterRef.current.contains(event.target as Node)
      ) {
        onClose();
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [onClose]);

  useEffect(() => {
    const savedSelectedAddresses = JSON.parse(
      localStorage.getItem("selectedAddresses") || "[]",
    );
    const savedStartDate = localStorage.getItem("startDate") || "";
    const savedWage = localStorage.getItem("wage") || "";

    setSelectedAddresses(savedSelectedAddresses);
    setStartDate(savedStartDate);
    setWage(savedWage);
  }, []);

  const handleAddressClick = (address: string) => {
    setSelectedAddresses((prev) => {
      const updatedAddresses = prev.includes(address)
        ? prev.filter((item) => item !== address)
        : [...prev, address];
      return updatedAddresses;
    });
  };

  const handleRemoveAddressClick = (address: string) => {
    setSelectedAddresses((prev) => {
      const updatedAddresses = prev.filter((item) => item !== address);
      return updatedAddresses;
    });
  };

  const handleFocus = () => setIsFocused(true);
  const handleBlur = () => setIsFocused(false);

  const handleDateChange = (e: React.FormEvent<HTMLInputElement>) => {
    const value = e.currentTarget.value;
    setStartDate(value);
  };

  const handleWageChange = (e: React.FormEvent<HTMLInputElement>) => {
    const { value } = e.currentTarget;
    const stringNumericValue = value.replace(/\D/g, "");
    const numericValue = Number(stringNumericValue);
    const formattedWage =
      numericValue > 999999 ? "999,999" : numberWithCommas(numericValue);
    setWage(formattedWage);
  };

  const handleReset = () => {
    setSelectedAddresses([]);
    setStartDate("");
    setWage("");
  };

  const handleApply = () => {
    const query = new URLSearchParams();

    query.append("page", "1");

    if (wage) query.append("wage", wage);
    if (startDate) query.append("startDate", startDate);

    if (Array.isArray(selectedAddresses)) {
      selectedAddresses.forEach((addr) => query.append("address", addr));
    } else if (selectedAddresses) {
      query.append("address", selectedAddresses);
    }

    const keywordParam = searchParams.get("keyword");
    if (keywordParam) query.append("keyword", keywordParam);
    const sortParam = searchParams.get("sort");
    if (sortParam) query.append("sort", sortParam);

    localStorage.setItem(
      "selectedAddresses",
      JSON.stringify(selectedAddresses),
    );
    localStorage.setItem("startDate", startDate);
    localStorage.setItem("wage", wage);

    router.push(`/notice-list?${query.toString()}`);
    onClose();
  };

  return (
    <>
      <form
        ref={filterRef}
        className="fixed inset-0 z-50 md:absolute md:left-[-315px] md:top-[37px] md:z-20"
      >
        <div className="rounded-[10px] border border-gray-20 bg-white px-[20px] py-[24px] shadow">
          <div className="mb-[24px] flex justify-between bg-white font-bold text-l">
            <h2>상세 필터</h2>
            <div className="h-[24px] w-[24px]">
              <Image
                className="cursor-pointer"
                src={close}
                alt="닫기"
                width={24}
                onClick={onClose}
              />
            </div>
          </div>
          <div className="w-full min-w-[350px] border-b pb-[24px]">
            <h3>위치</h3>
            <ul className="my-[12px] grid h-[258px] w-full grid-cols-2 overflow-scroll overflow-x-hidden rounded-[6px] border border-gray-20 px-[28px] pb-[20px] text-m">
              {ADDRESS.map((address) => (
                <li className="grid grid-cols-2 text-m" key={address}>
                  <data
                    className="mt-[20px] w-[94px] cursor-pointer"
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
                  <li key={address}>
                    <label className="flex justify-between gap-[4px] rounded-[20px] bg-red-10 px-[10px] py-[6px] text-m text-red-40">
                      <input
                        className="hidden"
                        type="checkbox"
                        name="address"
                        value={address}
                        checked
                        onChange={() => handleAddressClick(address)}
                      />
                      {address}
                      <Image
                        className="mt-[2px] h-[16px] w-[16px] cursor-pointer"
                        src={closeRed40}
                        alt="닫기"
                        width={24}
                        onClick={() => handleRemoveAddressClick(address)}
                      />
                    </label>
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
              id="startsAtGte"
              name="startDate"
              onChange={handleDateChange}
              onFocus={handleFocus}
              onBlur={handleBlur}
              min={minDate}
              style={{ color: startDate ? "black" : "transparent" }}
            />
          </div>
          <div className="mt-[24px] h-[92px] w-[350px] border-t-2 border-gray-10">
            <p className="mb-[8px] mt-[24px]">금액</p>
            <div className="relative flex">
              <input
                className="h-[58px] w-[169px] rounded-[6px] border border-gray-30 px-[20px] py-[16px] focus:outline-primary"
                placeholder="입력"
                id="hourlyPayGte"
                name="wage"
                type="text"
                value={wage}
                onInput={handleWageChange}
              />
              <p className="mx-[12px] my-[16px]">이상부터</p>
              <p className="absolute left-[134px] top-[16px]">원</p>
            </div>
          </div>
          <div className="mt-[56px] flex h-[48px] justify-between gap-[8px]">
            <Button
              type="button"
              className="w-[82px]"
              btnColor="white"
              onClick={handleReset}
            >
              초기화
            </Button>
            <Button
              className="w-[260px]"
              btnColor="orange"
              onClick={handleApply}
            >
              적용하기
            </Button>
          </div>
        </div>
      </form>
    </>
  );
}
