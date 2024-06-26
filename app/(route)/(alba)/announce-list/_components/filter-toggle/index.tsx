"use client";

import React, { useState } from "react";
import Filter from "@/app/(route)/(alba)/announce-list/_components/filter";

export default function FilterToggle() {
  const [showFilter, setShowFilter] = useState(false);

  const handleToggleFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  return (
    <div>
      <button className="bg-red-30 rounded-[5px] text-m font-bold text-white px-[12px] py-[6.5px]" onClick={handleToggleFilter}>
        <p>상세필터</p>
      </button>
      {showFilter && <Filter onClose={handleCloseFilter} />}
    </div>
  );
}
