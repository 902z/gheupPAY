"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import iphone from "@/public/images/iphone.png";
import "aos/dist/aos.css";
import AOS from "aos";
import { useEffect } from "react";
import { motion } from "framer-motion";

export default function Home() {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  }, []);

  return (
    <>
      <div className="mx-auto flex h-full w-full max-w-[1200px] flex-col overflow-x-hidden px-10">
        <div className="mb-10 ml-auto flex w-fit justify-end gap-4 rounded-b-2xl bg-white p-4 font-bold text-red-40 shadow-md">
          <Link href="/login" className="transition-all hover:scale-105">
            로그인
          </Link>
          <Link href="/signup" className="transition-all hover:scale-105">
            회원가입
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center py-4 md:flex-row md:items-start md:gap-14">
          <div className="w-[300px] md:w-[400px]">
            <Image src={logo} alt="logo" />
          </div>
          <div
            className="relative left-10 w-[400px] md:w-[500px]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image src={iphone} alt="logo" />
          </div>
        </div>
        <div>
          <div
            className="relative left-0 my-20 w-fit rounded-xl bg-gray-20 px-8 py-12 shadow-md md:left-2 md:text-xl"
            data-aos="fade-down-right"
          >
            알바생이 갑자기 그만뒀는데, 어떡하지?
          </div>
          <div
            className="relative left-20 my-20 w-fit rounded-xl bg-gray-20 px-8 py-12 shadow-md md:left-20 md:text-xl"
            data-aos="fade-down-left"
          >
            하루만 알바 대타 해 줄 사람 어디 없나?
          </div>
          <div
            className="relative left-0 my-20 w-fit rounded-xl bg-gray-20 px-8 py-12 shadow-md md:left-2 md:text-xl"
            data-aos="fade-down-right"
          >
            알바 할 시간은 없는데, 급전이 필요해 😢
          </div>
        </div>
        <p
          className="pb-4 font-bold text-xl md:text-5xl"
          data-aos="fade-right"
          data-aos-easing="ease-in-sine"
        >
          알바가 급할 땐? <br />
        </p>
        <p
          className="pb-4 text-right font-bold text-xl md:text-5xl"
          data-aos="fade-left"
          data-aos-easing="ease-in-sine"
        >
          일단 <span className="text-2xl text-red-40 md:text-7xl">급PAY</span>로
          들어와!!!!
        </p>
      </div>
      <div className="md:pb-30 flex h-fit flex-col items-center justify-center bg-red-10 pb-20 pt-8">
        <div
          className="w-[300px] md:w-[400px]"
          data-aos="fade-up"
          data-aos-anchor-placement="top-bottom"
        >
          <Image src={logo} alt="logo" />
        </div>
        <Link href="/notice-list">
          <motion.div
            className="w-[250px] cursor-pointer rounded-2xl bg-red-40 py-4 text-center font-bold text-l text-white"
            data-aos="fade-up"
            data-aos-anchor-placement="top-bottom"
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            transition={{ duration: 0.1 }}
          >
            시작하기
          </motion.div>
        </Link>
      </div>
    </>
  );
}
