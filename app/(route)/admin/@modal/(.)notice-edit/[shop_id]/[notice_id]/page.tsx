import { getNoticeInfo } from "@/app/_apis/notice";
import { numberWithCommas } from "@/app/_util/number-with-comma";
import { formatDateToDateTimeLocal } from "@/app/_util/format-date-tiem-local";
import CreateNoticeForm from "@/app/(route)/admin/@modal/(.)notice-create/_components/index";

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

export default async function NoticeEdit({ params }: NoticeEditProps) {
  const { shop_id, notice_id } = params;
  const res = await getNoticeInfo(shop_id, notice_id);
  const startAt = new Date(res.item.startsAt);
  const startAtString = formatDateToDateTimeLocal(startAt);
  const formValue: InitialInfo = {
    hourlyPay: numberWithCommas(res.item.hourlyPay),
    startsAt: startAtString,
    workhour: res.item.workhour,
    description: res.item.description,
  };

  return (
    <CreateNoticeForm
      initialForm={formValue}
      shopId={shop_id}
      noticeId={notice_id}
    />
  );
}
