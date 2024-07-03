export function BlindComponent({ description }: { description: string }) {
  return (
    <div className="absolute inset-0 z-10 flex items-center justify-center rounded-[12px] bg-black font-bold text-[20px] text-gray-30 opacity-70 md:text-2xl">
      {description}
    </div>
  );
}
