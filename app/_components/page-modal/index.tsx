"use client";
import { useRouter } from "next/navigation";
import Image from "next/image";
import close from "@/public/icons/close.png";
import { createPortal } from "react-dom";

interface PageModalProp {
  children: React.ReactNode;
  title: string;
}

/**
 * 페이지를 모달처럼 띄우고 싶을 때 감싸는 컴포넌트
 * 
 * @example
 *  <PageModal title="가게 등록">
        <ShopCreateForm />
    </PageModal>
 *  
 * @param {ReactNode} children 모달 안에 들어갈 컨텐츠
 * @param {string} title 제목
 * @author ☯️채종민
 */

function PageModal({ children, title }: PageModalProp) {
  const router = useRouter();
  return createPortal(
    <div className="fixed inset-0 z-50 flex justify-center bg-black bg-opacity-50 md:pt-[188px]">
      <div className="relative w-full max-w-[964px] rounded-t-lg bg-white pt-[35px]">
        <section className="h-full w-full overflow-scroll px-3 pb-[40px]">
          <header className="h- flex w-full justify-between">
            <h2 className="font-bold text-l leading-[25px]">{title}</h2>
            <div
              className="relative h-6 w-6 cursor-pointer md:h-8 md:w-8"
              onClick={() => router.back()}
            >
              <Image
                src={close}
                alt="닫기 버튼"
                fill
                priority
                sizes="100% 100%"
              />
            </div>
          </header>
          {children}
        </section>
      </div>
    </div>,
    document.body,
  );
}

export default PageModal;
