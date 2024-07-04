import Link from "next/link";
import React from "react";

function ShopDetail() {
  return (
    <div className="base-container">
      <Link href="/admin/shop-create">가게 등록하기</Link>
      <Link href="/admin/shop-edit?shop-Id=147349f4-9781-4266-8213-4f127b6ee5f9">
        가게 편집하기
      </Link>
      <div>내 가게</div>
    </div>
  );
}

export default ShopDetail;
