"use client";

import { useRouter } from "next/navigation";
import React from "react";

interface HomeHeaderProps {
  children: React.ReactNode;
  isLoggedIn?: boolean;
}

const HomeHeader = ({ children, isLoggedIn = false }: HomeHeaderProps) => {
  const router = useRouter();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { id } = e.target as HTMLDivElement;
    router.push(`/${id}`);
  };

  return (
    <header className="flex justify-between items-center">
      <p className="text-2xl font-extrabold">{children}</p>
      {isLoggedIn && (
        <div className="flex gap-4 font-bold" onClick={(e) => handleClick(e)}>
          <p id="request">문의하기</p>
          <p id="check">예약확인</p>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;
