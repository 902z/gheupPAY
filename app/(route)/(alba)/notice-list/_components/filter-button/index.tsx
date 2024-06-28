"use client";

import React, { useState } from "react";
import Filter from "@/app/(route)/(alba)/notice-list/_components/filter";

interface FilterButtonProps {
  onFilterChange: (addresses: string[]) => void;
}

export default function FilterButton({ onFilterChange }: FilterButtonProps) {
  const [showFilter, setShowFilter] = useState(false);

  const handleOpenFilter = () => {
    setShowFilter(!showFilter);
  };

  const handleCloseFilter = () => {
    setShowFilter(false);
  };

  return (
    <div>
      <button className="bg-red-30 rounded-[5px] text-m font-bold text-white px-[12px] py-[6.5px]" onClick={handleOpenFilter}>
        <p>상세필터</p>
      </button>
      {showFilter && <Filter onClose={handleCloseFilter} onFilterChange={onFilterChange} />}
    </div>
  );
}
