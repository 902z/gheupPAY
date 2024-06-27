import Image from "next/image";
import Link from "next/link";
import SearchBar from "./_component/search-bar";
import HeaderSelector from "./_component/header-selector";

export default function Header() {
  return (
    <header className="fixed left-0 right-0 top-0 z-50 bg-white shadow-md">
      <section className="grid h-[102px] grid-cols-2 grid-rows-2 px-5 pb-[10px] pt-[15px] md:flex md:h-[70px] md:px-8 md:py-[15px] lg:mx-auto lg:w-full lg:max-w-[1024px]">
        <Link
          href="/"
          className="relative col-start-1 h-[30px] w-[84px] md:h-10 md:w-28"
        >
          <Image src="/images/logo.png" alt="Logo" fill />
        </Link>
        <SearchBar className="col-span-full md:ml-8 md:mr-[22px] md:flex-1" />
        <nav className="col-start-2 row-start-1 flex items-start gap-4 justify-self-end font-bold text-m md:items-center md:text-base">
          <HeaderSelector />
        </nav>
      </section>
    </header>
  );
}
