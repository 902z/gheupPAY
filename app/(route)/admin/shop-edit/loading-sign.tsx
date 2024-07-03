import loadingGif from "@/public/images/loading.gif";
import Image from "next/image";

function LoadingSign() {
  return (
    <div className="mt-[150px] flex flex-col items-center">
      <Image src={loadingGif} alt="로딩 중" width={400} height={400} />
    </div>
  );
}

export default LoadingSign;
