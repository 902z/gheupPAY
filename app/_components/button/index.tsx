import Link, { LinkProps } from "next/link";
import React from "react";

type ButtonProps = {
  type?: "button" | "submit";
  className: string;
  color?: "orange" | "white";
} & React.ButtonHTMLAttributes<HTMLButtonElement>;

const STYLE = {
  white: "border border-primary bg-white text-primary disabled:border-none disabled:text-white",
  orange:
    "border border-primary bg-primary text-white active:border active:border-primary active:bg-white active:text-primary disabled:border-none disabled:text-white",
};

const BUTTON = "w-full rounded-md py-2 disabled:bg-gray-40 md:py-[10px] lg:py-[14px] text-center";

/**
 * css를 입힌 버튼 컴포넌트입니다. 버튼의 색상을 결정할 수 있습니다.
 * tailwind를 이용해서 추가적인 스타일을 입힐 수 있습니다.
 * 기본 넓이는 100%이고 폰트 스타일은 바뀌지 않았습니다.
 * className을 통해 추가적인 스타일을 입혀야 합니다.
 * @param children : 버튼 안에 담을 내용을 적습니다. (ex. "버튼")
 * @param className : 추가적인 css를 넣습니다. 넓이, 폰트 관련 css는 무조건 넣어야 합니다.
 * @param color : 버튼의 색상 스타일을 결정합니다. (orange, white)
 * @returns 버튼 컴포넌트를 반환합니다.
 * @example
 * <Button className="w-8 text-xl" color="orange">버튼</Button>
 * <Button className="w-6 text-xl" color="white">버튼</Button>
 */
export default function Button({ children, className, color = "orange", type = "button", ...rest }: ButtonProps) {
  return (
    <button type="button" className={`${BUTTON} ${STYLE[color]} ${className}`} {...rest}>
      {children}
    </button>
  );
}

type LinkButtonProps = {
  className: string;
  children: React.ReactNode;
  color?: "orange" | "white";
} & LinkProps;

/**
 * css를 입힌 Link 컴포넌트입니다. Link의 색상을 결정할 수 있습니다.
 * tailwind를 이용해서 추가적인 스타일을 입힐 수 있습니다.
 * 기본 넓이는 100%이고 폰트 스타일은 바뀌지 않았습니다.
 * className을 통해 추가적인 스타일을 입혀야 합니다.
 * 
 * @param href : 이동할 경로를 적습니다. (ex. "/admin/announce-list")
 * @param children : 버튼 안에 담을 내용을 적습니다. (ex. "버튼")
 * @param className : 추가적인 css를 넣습니다. 넓이, 폰트 관련 css는 무조건 넣어야 합니다.
 * @param color : Link의 색상 스타일을 결정합니다. (orange, white)
 * @returns 버튼 컴포넌트를 반환합니다.
 * @example
      <LinkButton href={"/admin/announce-list"} className="w-full text-xl" color="orange">
        버튼
      </LinkButton>
 */
export function LinkButton({ href, children, className, color = "orange", ...rest }: LinkButtonProps) {
  return (
    <Link href={href} className={`block ${BUTTON} ${STYLE[color]} ${className}`} {...rest}>
      {children}
    </Link>
  );
}
