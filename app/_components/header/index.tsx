import Image from "next/image";
import Link from "next/link";
import { HeaderNotLogin } from "./_component/header-not-login";
import HeaderLogin from "./_component/header-login";
import { getCookie } from "@/app/_util/cookie";

export default async function Header() {
  const type = await getCookie("type");

  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-sm">
      <section className="grid h-[102px] grid-cols-2 grid-rows-2 px-5 pb-[10px] pt-[15px] md:flex md:h-[70px] md:px-8 md:py-[15px] lg:mx-auto lg:w-full lg:max-w-[1024px]">
        <Link
          href="/"
          className="relative col-start-1 h-[30px] w-[84px] md:h-10 md:w-28"
        >
          <Image src="/images/logo.png" alt="Logo" fill />
        </Link>
        <form
          action="/notice-list"
          className={"relative col-span-full md:ml-8 md:mr-[22px] md:flex-1"}
        >
          <section className="absolute left-[10px] top-[10px] h-4 w-4 md:h-5 md:w-5">
            <Image src="/icons/search.png" alt="" fill />
          </section>
          <input
            type="search"
            name="keyword"
            className="h-9 w-full rounded-[10px] bg-gray-10 px-2 py-[10px] indent-[30px] text-s focus:outline-[0.5px] focus:outline-primary md:h-10 md:max-w-[450px] md:px-[10px] md:text-m lg:w-full lg:max-w-[450px]"
            placeholder="가게 이름으로 찾아보세요"
          />
        </form>
        <nav className="col-start-2 row-start-1 flex items-start gap-4 justify-self-end font-bold text-m md:items-center md:text-base">
          {!type ? <HeaderNotLogin /> : <HeaderLogin />}
        </nav>
      </section>
    </header>
  );
}
