"use server";
import { calculateTimeRange } from "@/app/_util/calculate-time-range";
import { calculateWagePercentage } from "@/app/_util/calculate-wage-percentage ";
import { dateFormat } from "@/app/_util/date-format";
import formattedNumber from "@/app/_util/number-format";
import Image from "next/image";
import React from "react";
import clock from "@/public/icons/clock.png";
import mapPin from "@/public/icons/map-pin.png";
import Button, { LinkButton } from "@/app/_components/button";
import OnlyLabelHourlyRate from "../only-label-hourly-rate";
import { getShopNoticeDetail } from "@/app/_apis/shop";
import compareWorkingDateDiffFromNow from "@/app/_util/calculate-date-diff";
import { BlindComponent } from "../blind-component";
import RegisterButton from "./_component/register-button";
import { getCookie } from "@/app/_util/cookie";
import { getUser, getUsersUserIdApplications } from "@/app/_apis/user";

interface NoticeDetailCardProps {
  shopId: string;
  noticeId: string;
}

// 이제 NoticeDeatilCard에는 shopId와 noticeId가 필요합니다.
export default async function NoticeDetailCard({
  shopId,
  noticeId,
}: NoticeDetailCardProps) {
  const noticeDetail = await getShopNoticeDetail(shopId, noticeId);

  const hourlyWage = calculateWagePercentage(noticeDetail.item.hourlyPay);
  const date = dateFormat(noticeDetail.item.startsAt);
  const isLater: boolean = compareWorkingDateDiffFromNow(
    noticeDetail.item.startsAt,
    noticeDetail.item.workhour,
  );
  const type = await getCookie("type");
  const address = await getCookie("address");
  const userId = await getCookie("userId");
  const userApplication =
    typeof userId === "string"
      ? await getUsersUserIdApplications(userId)
      : null;

  const userDetail = typeof userId === "string" ? await getUser(userId) : null;
  if (!userDetail || !userDetail.item || !userDetail.item.shop) {
    return null;
  }
  const isOwner =
    type === "employer" &&
    noticeDetail.item.shop.item.id === userDetail.item.shop.item.id;

  return (
    <>
      <div>
        <h3 className="font-bold text-m text-primary">
          {noticeDetail.item.shop.item.category}
        </h3>
        <data className="font-bold text-l">
          {noticeDetail.item.shop.item.name}
        </data>
      </div>
      <section className="box-border flex h-fit w-full flex-col rounded-[12px] border border-gray-10 bg-white p-5 lg:flex-row lg:gap-4">
        <div className="relative mb-2 box-border h-[180px] w-full rounded-[12px] md:h-[360px] lg:h-[308px] lg:w-[539px]">
          <Image
            alt=""
            src={noticeDetail.item.shop.item.imageUrl}
            fill={true}
            sizes="100% 100%"
            className="rounded-[12px] object-cover"
          />
          {noticeDetail.item.closed ? (
            <BlindComponent description="마감 완료" />
          ) : isLater ? (
            <BlindComponent description="지난 공고" />
          ) : null}{" "}
        </div>
        <div className="relative flex-1 px-1 lg:flex lg:flex-col lg:items-stretch lg:py-3">
          <div className="lg:flex-1">
            <h3 className="font-bold text-m text-primary">
              {noticeDetail.item.shop.item.category}
            </h3>
            <div className="flex gap-2 py-2">
              <data className="pt-1 font-bold text-ml md:text-l">
                {formattedNumber(noticeDetail.item.hourlyPay)}원
              </data>
              <OnlyLabelHourlyRate percent={hourlyWage} />
            </div>
            <div className="flex items-start gap-1">
              <Image src={clock} alt="시간" width={20} height={20} />
              <time className="text-s text-gray-50 md:text-m">
                {date}{" "}
                {calculateTimeRange(
                  noticeDetail.item.startsAt,
                  noticeDetail.item.workhour,
                )}{" "}
                ({noticeDetail.item.workhour}시간)
              </time>
            </div>
            <div className="flex items-center gap-1">
              <Image src={mapPin} alt="장소" width={20} height={20} />
              <data className="py-2 text-s text-gray-50 md:text-m">
                {noticeDetail.item.shop.item.address1}
              </data>
            </div>
            <div className="break-words py-4 text-m">
              <p>{noticeDetail.item.shop.item.description}</p>
            </div>
          </div>
          {isOwner ? (
            <LinkButton
              href={`/admin/shop-edit?shopId=${shopId}`}
              btnColor="white"
              className="font-bold"
            >
              편집하기
            </LinkButton>
          ) : noticeDetail.item.closed || isLater ? (
            <Button btnColor="orange" className="font-bold" disabled>
              신청 불가
            </Button>
          ) : type === "employer" && !isOwner ? (
            <Button btnColor="orange" className="font-bold" disabled>
              알바생만 신청 가능합니다
            </Button>
          ) : (
            <RegisterButton
              type={type}
              address={address}
              userApplication={userApplication}
              shopId={shopId}
              noticeId={noticeId}
            />
          )}
        </div>
      </section>
      <div className="mt-4 box-border flex h-fit w-full flex-col break-words rounded-[12px] bg-gray-10 p-5">
        <h3 className="font-bold">공고 설명</h3>
        <p>{noticeDetail.item.description}</p>
      </div>
    </>
  );
}
