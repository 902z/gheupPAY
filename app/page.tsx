"use client";
import Image from "next/image";
import Link from "next/link";
import logo from "@/public/images/logo.png";
import phone1 from "@/public/images/phone-1.png";
import phone2 from "@/public/images/phone-2.png";
import phone3 from "@/public/images/phone-3.png";
import phone4 from "@/public/images/phone-4.png";
import phone5 from "@/public/images/phone-5.png";
import phone6 from "@/public/images/phone-6.png";

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
      <div className="mx-auto flex w-full max-w-[1200px] flex-col overflow-x-hidden px-4">
        <div className="mb-10 ml-auto flex w-fit justify-end gap-4 rounded-b-2xl bg-white p-4 font-bold text-red-40 shadow-md">
          <Link href="/login" className="transition-all hover:scale-105">
            로그인
          </Link>
          <Link href="/signup" className="transition-all hover:scale-105">
            회원가입
          </Link>
        </div>

        <div className="flex flex-col items-center justify-center py-4">
          <div className="w-[300px] md:w-[400px]">
            <Image src={logo} alt="logo" />
          </div>
          <div>
            <div className="flex flex-col gap-20 pb-20">
              <div
                className="relative left-0 w-fit rounded-xl bg-gray-10 px-8 py-12 shadow-md md:left-2 md:text-xl"
                data-aos="fade-down-right"
              >
                알바생이 갑자기 그만뒀는데, 어떡하지?
              </div>
              <div
                className="relative left-10 w-fit rounded-xl bg-gray-10 px-8 py-12 shadow-md md:left-20 md:text-xl"
                data-aos="fade-down-left"
              >
                하루만 알바 대타 해 줄 사람 어디 없나?
              </div>
              <div
                className="relative left-0 w-fit rounded-xl bg-gray-10 px-8 py-12 shadow-md md:left-2 md:text-xl"
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
              알바가 급할 땐?
            </p>
            <p
              className="pb-4 text-right font-bold text-xl md:text-5xl"
              data-aos="fade-left"
              data-aos-easing="ease-in-sine"
            >
              일단{" "}
              <span className="text-2xl text-red-40 md:text-7xl">급PAY</span>로
              들어와!!!!
            </p>
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <h2 className="my-4 rounded-xl bg-blue-10 px-4 py-2 font-bold text-blue-20">
          사장님
        </h2>
        <div className="flex flex-col gap-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="rounded-xl bg-white p-4 shadow-md shadow-blue-10">
              <h3 className="pb-4 font-bold text-blue-20">즉시 채용</h3>
              <p>
                내 가게를 등록하고, <br />
                여러 개의 공고를 등록해보세요.
              </p>
            </div>
          </motion.div>
          <div
            className="mb-20 w-[350px] md:w-[500px]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image src={phone1} alt="" />
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="rounded-xl bg-white p-4 shadow-md shadow-blue-10">
              <h3 className="pb-4 font-bold text-blue-20">즉시 채용</h3>
              <p>
                일손이 급한 시기, <br />더 높은 시급으로 빠르게 알바생을
                모집하세요.
              </p>
            </div>
          </motion.div>
          <div
            className="mb-20 w-[350px] md:w-[500px]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image src={phone2} alt="" />
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="rounded-xl bg-white p-4 shadow-md shadow-blue-10">
              <h3 className="pb-4 font-bold text-blue-20">간편 신청 관리</h3>
              <p>
                아르바이트생의 지원 현황을 한눈에 확인하고, <br />
                쉽게 관리할 수 있습니다.
              </p>
            </div>
          </motion.div>
          <div
            className="mb-20 w-[350px] md:w-[500px]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image src={phone3} alt="" />
          </div>
        </div>
      </div>

      <div className="flex flex-col items-center justify-center py-4">
        <h2 className="my-4 rounded-xl bg-green-10 px-4 py-2 font-bold text-green-20">
          알바님
        </h2>
        <div className="flex flex-col gap-8">
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="rounded-xl bg-white p-4 shadow-md shadow-green-10">
              <h3 className="pb-4 font-bold text-green-20">높은 시급</h3>
              <p>급하게 필요한 일손에 더 높은 시급을 제공받으세요.</p>
            </div>
          </motion.div>
          <div
            className="mb-20 w-[350px] md:w-[500px]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image src={phone5} alt="" />
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="rounded-xl bg-white p-4 shadow-md shadow-green-10">
              <h3 className="pb-4 font-bold text-green-20">다양한 선택</h3>
              <p>
                다양한 일자리를 검색과 필터링을 통해쉽게 찾아보고, <br />
                나에게 맞는 일자리를 선택하세요.
              </p>
            </div>
          </motion.div>
          <div
            className="mb-20 w-[350px] md:w-[500px]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image src={phone4} alt="" />
          </div>
          <motion.div whileHover={{ scale: 1.05 }}>
            <div className="rounded-xl bg-white p-4 shadow-md shadow-green-10">
              <h3 className="pb-4 font-bold text-green-20">즉시 지원</h3>
              <p>
                빠르고 간편한 지원 절차로 <br />
                원하는 일자리에 즉시 지원할 수 있습니다.
              </p>
            </div>
          </motion.div>
          <div
            className="mb-20 w-[350px] md:w-[500px]"
            data-aos="fade-up"
            data-aos-anchor-placement="bottom-bottom"
          >
            <Image src={phone6} alt="" />
          </div>
        </div>
      </div>

      <div className="md:pb-30 flex h-fit flex-col items-center justify-center bg-red-10 pb-20 pt-8">
        <div
          className="w-[300px] md:w-[350px]"
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
