import React from "react";
import AnnounceCard from "./_components/AnnounceCard";

export default function page() {
  return (
    <div>
      <h2 className="font-bold text-2xl">맞춤 공고</h2>
      <AnnounceCard />
      <h2 className="font-bold text-2xl">전체 공고</h2>
    </div>
  );
}
