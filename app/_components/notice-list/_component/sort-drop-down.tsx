"use client";
import React, { useState, useRef, useEffect } from "react";
import useOutsideClick from "@/app/_hooks/use-outside-click";
import Image from "next/image";
import DownArrow from "@/public/icons/down-arrow.png";
import { useSearchParams } from "next/navigation";

const options = [
  { label: "마감임박순", value: "time" },
  { label: "시급많은순", value: "pay" },
  { label: "시간적은순", value: "hour" },
  { label: "가나다순", value: "shop" },
];

type SortDropDownProps = {
  onSelect: (value: string) => void;
};

const SortDropDown: React.FC<SortDropDownProps> = ({ onSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedOption, setSelectedOption] = useState<string | undefined>(
    "마감임박순",
  );
  const dropdownRef = useRef<HTMLDivElement>(null);
  const searchParams = useSearchParams();

  const handleDropdownToggle = () => {
    setIsOpen((prev) => !prev);
  };

  const handleOptionClick = (value: string, label: string) => {
    setSelectedOption(label);
    setIsOpen(false);
    onSelect(value);
  };

  useOutsideClick({
    ref: dropdownRef,
    handler: () => setIsOpen(false),
  });

  useEffect(() => {
    const sort = searchParams.get("sort") || "time";
    const selected = options.find((option) => option.value === sort);
    setSelectedOption(selected?.label);
  }, [searchParams]);

  useEffect(() => {
    setSelectedOption(options[0].label);
  }, [onSelect]);

  return (
    <div ref={dropdownRef} className="relative w-[105px]">
      <form className="relative">
        <input
          className={`h-[30px] w-[110px] cursor-pointer rounded-[6px] border border-gray-30 py-[6.5px] pl-3 text-left text-m hover:bg-gray-10 focus:outline-none ${
            selectedOption === "" ? "text-gray-40" : "text-black"
          }`}
          value={selectedOption || ""}
          onClick={handleDropdownToggle}
          readOnly
        />
        <Image
          className={`absolute right-1 top-1/2 -translate-y-1/2 cursor-pointer transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          }`}
          src={DownArrow}
          width={16}
          height={16}
          style={{ width: "12.8px", height: "auto" }}
          alt="arrow-down"
          onClick={handleDropdownToggle}
        />
      </form>
      <ul
        className={`absolute left-0 z-30 mt-2 max-h-[230px] w-full overflow-y-auto rounded-[6px] border border-gray-30 bg-white p-0 text-m shadow-md ${
          isOpen ? "block" : "hidden"
        }`}
      >
        {options.map((option, index) => (
          <li
            className="h-[46px] cursor-pointer text-center leading-[46px] hover:bg-gray-10"
            onClick={() => handleOptionClick(option.value, option.label)}
            key={index}
          >
            {option.label}
            {options.length - 1 !== index && <hr className="bg-gray-20" />}
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SortDropDown;
