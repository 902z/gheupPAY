import { useEffect } from "react";
import { getCookie } from "@/app/_util/cookie";
import { useRouter } from "next/navigation";

const useCheckLoginStatus = () => {
  const router = useRouter();

  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = await getCookie("accessToken");
      if (accessToken) {
        alert("이미 로그인 상태입니다.");
        router.replace("/announce-list");
      }
    };

    checkLoginStatus();
  }, [router]);
};

export default useCheckLoginStatus;
