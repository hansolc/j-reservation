"use client";

import { useRouter } from "next/navigation";
import React from "react";
import { useAuth } from "../common/AuthContext";

interface HomeHeaderProps {
  children: React.ReactNode;
  isLoggedIn?: boolean;
}

const HomeHeader = ({ children }: HomeHeaderProps) => {
  const router = useRouter();
  const { isAuthenticated } = useAuth();

  const handleClick = (e: React.MouseEvent<HTMLDivElement, MouseEvent>) => {
    const { id } = e.target as HTMLDivElement;
    if (id === "check") {
      router.push(`reservation/${id}`);
    } else {
      // request 처리
    }
  };

  return (
    <header className="flex justify-between items-center">
      <p className="text-2xl font-extrabold">{children}</p>
      {isAuthenticated && (
        <div className="flex gap-4 font-bold" onClick={(e) => handleClick(e)}>
          <p id="request">문의하기</p>
          <p id="check">예약확인</p>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;
