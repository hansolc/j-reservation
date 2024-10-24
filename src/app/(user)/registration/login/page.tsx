"use client";

import LoginForm from "@/components/user/LoginForm";
import Button from "@components/user/button";
import { useRouter } from "next/navigation";
import React from "react";

const RegistrationLoginPage = () => {
  const router = useRouter();
  return (
    <>
      <div>
        <header className="text-2xl font-bold">로그인하기</header>
        <LoginForm />
      </div>
      <footer className="absolute w-full pr-[inherit] flex flex-col items-center bottom-6">
        <Button
          color="primary"
          size="lg"
          isRadius
          className="mt-3"
          onClick={() => router.push("/")}
        >
          로그인하기
        </Button>
      </footer>
    </>
  );
};

export default RegistrationLoginPage;
