"use client";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef, useState } from "react";
import closeGray40 from "@/public/icons/close-gray-40.png";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  const [inputValue, setInputValue] = useState("");
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (inputValue) {
      router.push(`/notice-list?keyword=${inputValue}`);
      setInputValue("");
      localStorage.removeItem("selectedAddresses");
      localStorage.removeItem("startDate");
      localStorage.removeItem("wage");
    }
  };

  const handleClear = () => {
    setInputValue("");
    inputRef.current?.focus();
  };

  return (
    <form onSubmit={handleSubmit} className={className}>
      <div className="relative flex items-center md:max-w-[450px]">
        <div className="absolute left-[10px] top-[10px] h-4 w-4 md:h-5 md:w-5">
          <Image
            src="/icons/search.png"
            alt=""
            fill
            priority
            sizes="100% 100%"
          />
        </div>
        <input
          type="search"
          className="h-9 w-full rounded-[10px] bg-gray-10 px-2 py-[10px] indent-[30px] text-s focus:outline-[0.5px] focus:outline-primary md:h-10 md:max-w-[450px] md:px-[10px] md:text-m lg:w-full lg:max-w-[450px]"
          placeholder="가게 이름으로 찾아보세요"
          ref={inputRef}
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          name="keyword"
        />
        {inputValue && (
          <div className="absolute right-4 top-[14px] h-2 w-2 cursor-pointer md:right-3 md:top-4 lg:right-3 lg:top-4">
            <Image
              src={closeGray40}
              alt="닫기"
              width={24}
              height={24}
              onClick={handleClear}
              priority
              sizes="100% 100%"
            />
          </div>
        )}
      </div>
    </form>
  );
}
