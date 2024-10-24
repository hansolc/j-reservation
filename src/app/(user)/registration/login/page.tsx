"use client";

import Button from "@components/user/button";
import InputOutlinedBottom from "@components/user/input/InputOutlinedBottom";
import { useRouter } from "next/navigation";
import React from "react";

const RegistrationLoginPage = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <header className="text-2xl font-bold">로그인하기</header>
        <form className="flex flex-col gap-8 pt-8">
          <InputOutlinedBottom
            label="이메일"
            type="text"
            placeholder="omatasae@example.com"
          />
          <InputOutlinedBottom
            label="비밀번호"
            type="password"
            placeholder="omatase"
          />
        </form>
      </div>
      <footer className="absolute w-full pr-[inherit] flex flex-col items-center bottom-6">
        <Button
          color="primary"
          size="lg"
          isRadius
          className="mt-3"
          onClick={() => router.push("/registration/login")}
        >
          로그인하기
        </Button>
      </footer>
    </>
  );
};

export default RegistrationLoginPage;
