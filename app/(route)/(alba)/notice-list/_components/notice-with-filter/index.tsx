// "use client";

// import React, { useState } from "react";
// import Filter from "@/app/(route)/(alba)/notice-list/_components/filter";
// import NoticeCard from "@/app/_components/notice-card";
// import AllNoticeList from '@/app/_components/notice-list';
// import { NoticeResponse } from '@/app/_apis/notice/response-type';

// type noticeWithFilterProps ={
//   allNotices: NoticeResponse;
//   activePage: number;
//   itemsCountPerPage: number;
// }

// const NoticeWithFilter = ({ allNotices, activePage, itemsCountPerPage } : noticeWithFilterProps) => {
//   const [showFilter, setShowFilter] = useState(false);
//   const [filteredAddresses, setFilteredAddresses] = useState<string[]>([]);
//   const [wage, setWage] = useState<string>("");

//   const cardContents = allNotices.items;
  
//   const handleOpenFilter = () => {
//     setShowFilter(!showFilter);
//   };
//   const handleCloseFilter = () => {
//     setShowFilter(false);
//   };
//   const handleFilterChange = (addresses: string[], wage: string) => {
//     setFilteredAddresses(addresses);
//     setWage(wage);
//   };

//   function stringNumberToInt(wage: string){
//     return parseInt(wage.replace(/,/g , ''));
//   }

//   const wageNumber = stringNumberToInt(wage);

//   const filteredNotices = allNotices.filter(
//     (notice: { item: { shop: { item: { address1: string } } } }) =>
//       filteredAddresses.length === 0 ||
//       filteredAddresses.includes(notice.item.shop.item.address1),
//     (notice: {item: {hourlyPay: number}}) => {
//       wageNumber < notice.item.hourlyPay
//     }
//   );

//   return (
//     <>
//       <div className="relative flex justify-between">
//         <h2 className="pb-4 font-bold text-l md:pb-12 md:text-2xl">
//           전체 공고
//         </h2>
//         {/* FilterButton 컴포넌트 다시 합체 */}
//         <button
//           className="rounded-[5px] h-[30px] bg-red-30 px-[12px] font-bold text-m text-white"
//           onClick={handleOpenFilter}
//         >
//           <p>상세필터</p>
//         </button>
//         {showFilter && (
//           <Filter
//             onClose={handleCloseFilter}
//             // onFilterChange={handleFilterChange}
//           />
//         )}

//       </div>
//       <div className="lg grid grid-cols-2 gap-4 lg:grid-cols-3">
//         {/* 수신변경사항 */}
//       <AllNoticeList
//         notices={allNotices}
//         activePage={activePage}
//         itemsCountPerPage={itemsCountPerPage}
//       />
//       {/* 내가 쓰고 있던 거
//         <NoticeCard
//           notices={filteredNotices}
//           filteredAddresses={filteredAddresses}
//           wageNumber={wageNumber}
//         /> */}
//       </div>
//     </>
//   );
// };

// export default NoticeWithFilter;
