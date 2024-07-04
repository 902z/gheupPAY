import { getUsersUserIdAlerts } from "@/app/_apis/type";
import Image from "next/image";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import { putAlerts } from "@/app/_apis/alert";
import timeDifferenceFromNow from "@/app/_util/time-difference-from-now";
import { useRouter } from "next/navigation";

interface AlertCardProps {
  item: getUsersUserIdAlerts["items"][0];
  onDelete: (id: string) => void;
}

export default function AlertCard({ item, onDelete }: AlertCardProps) {
  const router = useRouter();
  const handleMove = () => {
    router.push(
      `/notice-detail/${item.item.shop.item.id}/${item.item.notice.item.id}`,
    );
  };

  const handleRemove = async () => {
    await putAlerts(item.item.id);
    onDelete(item.item.id);
  };

  return (
    <section className="z-10 flex w-full flex-col">
      <Swiper
        onClick={handleMove}
        onSlideChange={handleRemove}
        dir="rtl"
        slidesPerView="auto"
        mousewheel
        className="alertCard"
      >
        <SwiperSlide>
          <li
            className="mb-2 flex h-[105px] !w-full flex-col items-start gap-2 rounded-[5px] bg-white px-3 py-4 duration-200 hover:scale-[1.01] active:scale-95"
            dir="ltr"
          >
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
              {item?.item.shop.item.name}({item?.item.notice.item.workhour})
              공고 지원이{" "}
              {item?.item.result === "accepted" ? (
                <span className="text-blue-20">승인</span>
              ) : (
                <span className="text-red-40">거절</span>
              )}
              되었어요.
            </p>
            <p className="text-[12px] text-gray-500">
              {timeDifferenceFromNow(item?.item.createdAt)}
            </p>
          </li>
        </SwiperSlide>
        <SwiperSlide></SwiperSlide>
      </Swiper>
    </section>
  );
}
