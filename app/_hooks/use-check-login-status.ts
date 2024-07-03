import { useEffect, useState } from "react";
import { getCookie } from "@/app/_util/cookie";

const useCheckLoginStatus = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect(() => {
    const checkLoginStatus = async () => {
      const accessToken = await getCookie("accessToken");
      if (accessToken) {
        setIsLoggedIn(true);
      }
    };

    checkLoginStatus();
  }, []);

  return {isLoggedIn, setIsLoggedIn};
};

export default useCheckLoginStatus;
