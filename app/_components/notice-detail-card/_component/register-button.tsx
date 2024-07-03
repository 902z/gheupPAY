"use client";
import Button from "../../button";

interface RegisterButtonProps {
  closed: boolean;
  isLater: boolean;
}
export default function RegisterButton({
  closed,
  isLater,
}: RegisterButtonProps) {
  return (
    <>
      {closed || isLater ? (
        <Button btnColor="orange" className="font-bold">
          공고 편집하기
        </Button>
      ) : (
        <Button btnColor="orange" className="font-bold" disabled>
          신청 불가
        </Button>
      )}
    </>
  );
}
