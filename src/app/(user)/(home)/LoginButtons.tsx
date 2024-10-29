"use client";

import Button from "@components/user/button";
import React from "react";
import { useRouter } from "next/navigation";

const LoginButtons = () => {
  const router = useRouter();
  return (
    <div className="flex flex-col items-center text-lg font-bold gap-3">
      <Button
        size="sm"
        color="primary"
        isRadius
        onClick={() => router.push("/registration")}
      >
        시작하기
      </Button>
      {/* <Button
        size="sm"
        color="kakao"
        isRadius
        onClick={() => {
          console.log("go to kakao regis page");
        }}
      >
        카카오 로그인
      </Button> */}
    </div>
  );
};

export default LoginButtons;
