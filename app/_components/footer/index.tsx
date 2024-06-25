import Image from "next/image";
import Link from "next/link";

// 모바일과 나머지 반응형을 따로 구현한 후 css로 처리하였습니다.
export default function Footer() {
  return (
    <>
      <footer className="relative left-0 right-0 grid grid-cols-2 grid-rows-2 justify-between gap-y-[34px] bg-gray-10 px-5 pb-4 pt-8 text-gray-50">
        <p className="flex gap-[30px] text-m font-normal text-gray-50">
          <span className="text-nowrap">Privacy Policy</span>
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
        <p className="self-end text-s font-normal text-gray-50">
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
