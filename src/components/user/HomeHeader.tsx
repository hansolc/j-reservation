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

  return (
    <header className="flex justify-between items-center">
      <p className="text-2xl font-extrabold">{children}</p>
      {isAuthenticated && (
        <div className="flex gap-4 font-bold cursor-pointer">
          <p id="request" onClick={() => router.push("/request")}>
            문의하기
          </p>
          <p id="check" onClick={() => router.push("/reservation/check")}>
            예약확인
          </p>
        </div>
      )}
    </header>
  );
};

export default HomeHeader;
