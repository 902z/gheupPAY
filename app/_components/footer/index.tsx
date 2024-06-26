import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative left-0 right-0 bg-gray-10">
        <section className="grid grid-cols-2 grid-rows-2 justify-between gap-y-[28px] px-5 pb-4 pt-8 text-gray-50 md:flex md:px-8 md:py-[37.5px] lg:mx-auto lg:w-full lg:max-w-[964px]">
          <p className="flex gap-[30px] text-m font-normal text-gray-50 md:order-2 md:text-base">
            <span className="text-nowrap">Privacy Policy</span>
            <span>FAQ</span>
          </p>
          <nav className="flex justify-end gap-[10px] md:order-last md:self-center">
            <Link href="https://mail.google.com/">
              <Image src="/icons/mail.png" alt="mail" width={25} height={25} />
            </Link>
            <Link href="https://www.facebook.com/">
              <Image
                src="/icons/facebook.png"
                alt="facebook"
                width={25}
                height={25}
              />
            </Link>
            <Link href="https://www.instagram.com/">
              <Image
                src="/icons/instagram.png"
                alt="instagram"
                width={25}
                height={25}
              />
            </Link>
          </nav>
          <p className="self-end text-s font-normal text-gray-50 md:order-1 md:self-center md:text-base">
            ©codeit - 2024
          </p>
        </section>
      </footer>
    </>
  );
}
