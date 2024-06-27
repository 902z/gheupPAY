"use client";

import useUserStore from "@/stores/user-store";
import { useEffect } from "react";

// mount 시 rehydrate를 실행합니다.
const Hydration = () => {
  useEffect(() => {
    useUserStore.persist.rehydrate();
  }, []);

  return null;
};

export default Hydration;
