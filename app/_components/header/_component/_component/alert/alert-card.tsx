import { getUsersUserIdAlerts } from "@/app/_apis/type";
import Image from "next/image";

interface AlertCardProps {
  item: getUsersUserIdAlerts["items"][0];
}

export default function AlertCard({ item }: AlertCardProps) {
  return (
    <li className="mb-2 flex h-[105px] w-full flex-col items-start gap-2 rounded-[5px] bg-white px-3 py-4">
      {item?.item.result === "accepted" ? (
        <Image
          src="/icons/alert-allowed.png"
          width={5}
          height={5}
          alt="accepted"
          priority
          className="mb-1"
        />
      ) : (
        <Image
          src="/icons/alert-rejected.png"
          width={5}
          height={5}
          alt="rejected"
          priority
          className="mb-1"
        />
      )}
      <p className="text-start text-sm font-normal">
        {item?.item.shop.item.name}({item?.item.notice.item.workhour}) 공고
        지원이{" "}
        {item?.item.result === "accepted" ? (
          <span className="text-blue-20">승인</span>
        ) : (
          <span className="text-red-40">거절</span>
        )}
        되었어요.
      </p>
      <p className="text-[12px] text-gray-500">{item?.item.createdAt}</p>
    </li>
  );
}
