"use client";

import Link from "next/link";
import React from "react";

const SidbarContainer = ({ children }: { children: React.ReactNode }) => (
  <aside className="flex-1 max-w-64 p-5 text-lg">{children}</aside>
);

const HeaderText = ({ children }: { children: React.ReactNode }) => (
  <p className="text-[#109CF1] font-bold">{children}</p>
);

const Categories = () => (
  <div className="flex items-center text-[#109CF1]">
    <span className="material-symbols-outlined text-2xl">&#xe5d2;</span>
    <span className="pl-5 text-base">분류</span>
  </div>
);

const UnorderedList = () => {
  return (
    <ul className="text-sm list-[circle] flex flex-col gap-2 pl-8 mt-2">
      <li className="marker:text-[#FFB946]">
        <Link href="/admin/board?category=reservation">예약관리</Link>
      </li>
      <li className="marker:text-[#2ED47A]">
        <Link href="/admin/board?category=request">문의관리</Link>
      </li>
    </ul>
  );
};

const AdminSideBar = () => {
  return (
    <SidbarContainer>
      <HeaderText>오마타세</HeaderText>
      <Categories />
      <UnorderedList />
    </SidbarContainer>
  );
};

export default AdminSideBar;
