"use client";
import { getNoticeInfo } from "@/app/_apis/notice";
import { numberWithCommas } from "@/app/_util/number-with-comma";
import { useEffect, useState } from "react";
import CreateNoticeForm from "../../../@modal/(.)notice-create/_components";

type NoticeEditProps = {
  params: {
    shop_id: string;
    notice_id: string;
  };
};
type InitialInfo = {
  hourlyPay: string;
  startsAt: string;
  workhour: number;
  description: string;
};

function formatDateToDatetimeLocal(date: Date): string {
  const pad = (num: number): string => num.toString().padStart(2, "0");
  const year: number = date.getFullYear();
  const month: string = pad(date.getMonth() + 1);
  const day: string = pad(date.getDate());
  const hours: string = pad(date.getHours());
  const minutes: string = pad(date.getMinutes());

  return `${year}-${month}-${day}T${hours}:${minutes}`;
}

export default function NoticeEdit({ params }: NoticeEditProps) {
  const [initialInfo, setInitialInfo] = useState<InitialInfo>();
  const { shop_id, notice_id } = params;

  useEffect(() => {
    const getNoticeDetail = async () => {
      const res = await getNoticeInfo(shop_id, notice_id);
      const startAt = new Date(res.item.startsAt);
      const startAtString = formatDateToDatetimeLocal(startAt);
      const formValue: InitialInfo = {
        hourlyPay: numberWithCommas(res.item.hourlyPay),
        startsAt: startAtString,
        workhour: res.item.workhour,
        description: res.item.description,
      };
      setInitialInfo(formValue);
    };
    getNoticeDetail();
  }, []);
  return (
    <div className="mt-[70px]">
      <div className="ml-auto mr-auto mt-[70px] max-w-[964px] pb-20 pl-3 pr-3 pt-[60px] md:pl-8 md:pr-8">
        <div className="mb-6 flex justify-between">
          <h1 className="font-bold text-l">공고 수정</h1>
        </div>
        {initialInfo && (
          <CreateNoticeForm
            initialForm={initialInfo}
            shopId={shop_id}
            noticeId={notice_id}
          />
        )}
      </div>
    </div>
  );
}
