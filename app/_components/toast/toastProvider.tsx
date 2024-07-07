"use client";

import "react-toastify/dist/ReactToastify.css";
import "@/styles/globals.css";
import { ToastContainer } from "react-toastify";

interface ToastProviderProps {
  children: React.ReactNode;
}

export default function ToastProvider({ children }: ToastProviderProps) {
  const contextClass = {
    success: "bg-green-20",
    error: "bg-red-30",
    info: "bg-blue-20",
    warning: "bg-kakao",
    default: "bg-gray-20",
    dark: "bg-white-600 font-gray-300",
  };
  return (
    <>
      {children}
      <ToastContainer
        toastClassName={(context) =>
          contextClass[context?.type || "default"] +
          " relative flex min-h-5 rounded-md justify-between overflow-hidden cursor-pointer p-2 "
        }
        bodyClassName={() => "flex font-white block p-3 items-center"}
      />
    </>
  );
}
