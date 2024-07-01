"use server";
import { redirect } from "next/navigation";
import { postNotice } from "../_util/notice";
import { GetNotices } from "../_apis/type";

const postNoticeAction = async (
  cardContents: GetNotices["items"][0]["item"],
): Promise<void> => {
  await postNotice(cardContents);
  await redirect(
    `/notice-detail/${cardContents.shop.item.id}/${cardContents.id}`,
  );
};

export default postNoticeAction;
