import React from "react";
import AnnounceCard from "./_components/announce-card";
import getNotices from "@/app/_apis/api";
import Filter from "./_components/filter";

export default async function page() {
  const data = await getNotices({});

  return (
    <div>
      <h2 className="font-bold text-2xl">맞춤 공고</h2>
      <AnnounceCard notices={data} />
      <h2 className="font-bold text-2xl">전체 공고</h2>
      <Filter></Filter>
    </div>
  );
}
