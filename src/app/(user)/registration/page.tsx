"use client";

import Button from "@components/user/button";
import InputOutlinedBottom from "@components/user/input/InputOutlinedBottom";
import { useRouter } from "next/navigation";
import React from "react";

const RegistrationPage = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <header className="text-2xl font-bold">
          회원가입을 위해
          <br />
          정보를 입력해주세요.
        </header>
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
        <p className="text-sm">이미 아이디가 있으신가요?</p>
        <p
          className="text-sm border-b"
          onClick={() => router.push("/registration/login")}
        >
          로그인하기
        </p>
        <Button
          color="primary"
          size="lg"
          isRadius
          className="mt-3"
          onClick={() => router.push("/registration/login")}
        >
          회원가입하기
        </Button>
      </footer>
    </>
  );
};

export default RegistrationPage;
