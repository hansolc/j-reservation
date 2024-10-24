"use client";

import Button from "@components/user/button";
import { useRouter } from "next/navigation";
import React from "react";
import { default as RegistrationForm } from "@/components/user/LoginForm";

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
        <RegistrationForm />
      </div>
      {/* *** 클라이언트 컴포넌트로 변경 후 현재 페이지 Server Component로 변경 */}
      <footer className="fixed w-full flex flex-col items-center bottom-6 left-0">
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
