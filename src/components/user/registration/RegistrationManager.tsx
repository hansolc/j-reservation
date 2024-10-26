"use client";

import React, { useCallback } from "react";
import LoginForm from "../LoginForm";
import Button from "../button";
import useRegistration from "./useRegistration";
import { useRouter } from "next/navigation";

const RegistrationManager = ({ type }: { type: "regis" | "login" }) => {
  const router = useRouter();

  const { info, handleInputChange, registration, login } = useRegistration();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (type === "login") {
        // api login from useRegistration
        login(info);
      } else {
        registration(info);
      }
    },
    [type, login, registration, info]
  );

  return (
    <form onSubmit={handleSubmit}>
      <div className="px-5">
        <LoginForm info={info} handleChange={handleInputChange} />
      </div>
      {type === "regis" ? (
        <div className="text-center text-sm">
          <p className="">이미 아이디가 있으신 가요?</p>
          <p
            className="text-[#575757] border-b font-bold inline cursor-pointer"
            onClick={() => router.push("/registration/login")}
          >
            로그인 하기
          </p>
        </div>
      ) : null}
      <Button
        color="primary"
        size="lg"
        isRadius
        type="submit"
        className="absolute bottom-10"
      >
        {type === "regis" ? "회원가입" : "로그인"}하기
      </Button>
    </form>
  );
};

export default RegistrationManager;
