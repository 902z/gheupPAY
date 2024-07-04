import Link from "next/link";
import React from "react";

function ShopDetail() {
  return (
    <div className="base-container">
      <Link href="/admin/shop-create">가게 등록하기</Link>
      <div>
        <Link href="/admin/notice-create">공고 등록</Link>
      </div>
      <div>내 가게</div>
    </div>
  );
}

export default ShopDetail;
