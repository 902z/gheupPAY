"use server";
import { GetNotices } from "../_apis/type";
import { getCookie, setCookie } from "@/app/_util/cookie";

export interface NoticeIds {
  id: GetNotices["items"][0]["item"]["id"];
  shopId: GetNotices["items"][0]["item"]["shop"]["item"]["id"];
}

export const getNotices = async (): Promise<NoticeIds[]> => {
  const currentNotice: NoticeIds[] = JSON.parse(
    (await getCookie("notices")) || "[]",
  );
  return currentNotice;
};

const setNotices = async (noticesIdList: NoticeIds[]): Promise<void> => {
  await setCookie("notices", JSON.stringify(noticesIdList));
};

export async function postNotice(
  notice: GetNotices["items"][0]["item"],
): Promise<void> {
  const currentNotice: NoticeIds[] = await getNotices();
  const newNoticeId = { id: notice.id, shopId: notice.shop.item.id };
  const isDuplicated = currentNotice.some((n) => n.id === notice.id);
  if (isDuplicated) {
    await setNotices([
      newNoticeId,
      ...currentNotice.filter((n) => n.id !== notice.id),
    ]);
  } else if (currentNotice.length >= 7) {
    await setNotices([newNoticeId, ...currentNotice.slice(0, 6)]);
  } else {
    await setNotices([newNoticeId, ...currentNotice]);
  }
}
