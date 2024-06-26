import Image from "next/image";
import Link from "next/link";

export default function Footer() {
  return (
    <>
      <footer className="relative left-0 right-0 grid grid-cols-2 grid-rows-2 justify-between gap-y-[28px] bg-gray-10 px-5 pb-4 pt-8 text-gray-50 md:flex md:px-8 md:py-[37.5px]">
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
          ©codeit - 2023
        </p>
      </footer>
      {/* <footer className="relative left-0 right-0 hidden bg-gray-10 text-gray-50 md:block">
        <section className="max-w-[964px] justify-between md:flex md:px-8 md:py-[37px] lg:mx-auto">
          <p>
            ©<span className="company-name">codeit</span> - 2023
          </p>
          <p className="flex gap-[30px]">
            <span>Privacy Policy</span>
            <span>FAQ</span>
          </p>
          <nav className="flex justify-end gap-[10px]">
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
        </section>
      </footer> */}
    </>
  );
}
