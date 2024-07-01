"use client";
import ShopRegisterForm from "@/app/_components/shop-register";

function storeRegister() {
  return (
    <>
      <header className="h- flex w-full justify-between">
        <h2 className="font-bold text-l leading-[25px]">가게 등록</h2>
      </header>
      <ShopRegisterForm />
    </>
  );
}

export default storeRegister;
