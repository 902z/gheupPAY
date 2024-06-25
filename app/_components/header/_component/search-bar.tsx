import Image from "next/image";
import { useRouter } from "next/navigation";
import { useRef } from "react";

interface SearchBarProps {
  className?: string;
}

export default function SearchBar({ className }: SearchBarProps) {
  const inputRef = useRef<HTMLInputElement>(null);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const value = inputRef.current?.value;
    if (value) {
      router.push(`/announce-list/${value}`);
    }
  };

  return (
    <form onSubmit={handleSubmit} className={"relative " + className}>
      <section className="absolute left-[10px] top-[10px] h-4 w-4 md:h-5 md:w-5">
        <Image src="/icons/search.png" alt="" objectFit="cover" fill />
      </section>
      <input
        type="search"
        className="h-9 w-full rounded-[10px] bg-gray-10 px-2 py-[10px] indent-[30px] text-s md:h-10 md:w-[344px] md:px-[10px] lg:w-[450px]"
        placeholder="가게 이름으로 찾아보세요"
        ref={inputRef}
      />
    </form>
  );
}
