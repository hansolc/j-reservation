"use client";

import React, { useCallback } from "react";
import LoginForm from "../LoginForm";
import Button from "../button";
import useRegistration from "./useRegistration";
import { useRouter } from "next/navigation";
import { useAuth } from "@/components/common/AuthContext";

const RegistrationManager = ({ type }: { type: "regis" | "login" }) => {
  const router = useRouter();
  const { userLogin } = useAuth();

  const { info, handleInputChange, registration, loading } = useRegistration();

  const handleSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      if (type === "login") {
        // api login from useRegistration
        userLogin(info);
      } else {
        const temp = {
          ...info,
          role: "user",
        };
        registration(temp);
      }
    },
    [type, userLogin, registration, info]
  );

  return (
    <>
      <form onSubmit={handleSubmit} className="relative h-full">
        <div className="px-5">
          <LoginForm info={info} handleChange={handleInputChange} />
        </div>
        <div className="absolute bottom-10 w-full">
          {type === "regis" && (
            <div className="pb-5">
              <div className="text-center text-sm">
                <p className="">이미 아이디가 있으신 가요?</p>
                <p
                  className="text-[#575757] border-b font-bold inline cursor-pointer"
                  onClick={() => router.push("/registration/login")}
                >
                  로그인 하기
                </p>
              </div>
            </div>
          )}
          <div>
            {loading ? (
              "...loading"
            ) : (
              <Button color="primary" size="lg" isRadius type="submit">
                {type === "regis" ? "회원가입" : "로그인"}하기
              </Button>
            )}
          </div>
        </div>
      </form>
    </>
  );
};

export default RegistrationManager;
