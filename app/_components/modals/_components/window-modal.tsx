import Image from "next/image";
import close from "@/public/icons/close.png";
import { motion, AnimatePresence } from "framer-motion";

/**
 * 
 * 커스텀 버튼 컴포넌트
 * (react-hook-form + yup 조건)
 * @example
 *  <WindowModal title="가게 등록" onclick={closeModal}>
        {<shopRegister/>}
    </WindowModal>
* @param {ReactNode} children 제목 - x 밑에 들어갈 친구들(form)
 * @param {string} title 제목
 * @param {() => void} onclick x 버튼 크릭 
 * @author ☯️채종민
 */

function WindowModal({
  children,
  title,
  onclick,
}: {
  children: React.ReactNode;
  title: string;
  onclick: () => void;
}) {
  return (
    <div className="absolute inset-0 z-10 w-full bg-white top-3">
      <AnimatePresence>
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.3 }}
        >
          <main className="base-container mt-[60px] w-full max-w-[964px] pb-[60px] md:pb-[80px]">
            <header className="h- flex w-full justify-between">
              <h2 className="font-bold text-l leading-[25px]">{title}</h2>
              <div
                onClick={onclick}
                className="relative h-6 w-6 cursor-pointer md:h-8 md:w-8"
              >
                <Image src={close} alt="닫기 버튼" fill priority />
              </div>
            </header>
            {children}
          </main>
        </motion.div>
      </AnimatePresence>
    </div>
  );
}

export default WindowModal;
