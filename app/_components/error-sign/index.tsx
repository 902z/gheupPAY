import warning from "@/public/images/warning.png";
import Image from "next/image";

function ErrorSign() {
  return (
    <div className="mt-[150px] flex flex-col items-center bg-gray-5">
      <Image src={warning} alt="경고" width={400} height={400} />
      <h1 className="font-bold text-primary mt-4">에러가 발생했습니다. 다시 시도해 주세요</h1>
    </div>
  );
}

export default ErrorSign;
