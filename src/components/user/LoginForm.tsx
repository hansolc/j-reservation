"use client";

import React, { ChangeEvent, useState } from "react";
import InputOutlinedBottom from "./input/InputOutlinedBottom";

interface LoginInfoProps {
  email: string;
  password: string;
}

const LoginForm = () => {
  const [info, setInfo] = useState<LoginInfoProps>({
    email: "",
    password: "",
  });

  // *** Email, password Regex 규칙 추가
  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target as HTMLInputElement;
    setInfo({
      ...info,
      [e.target.name]: value,
    });
  };

  return (
    <form className="flex flex-col gap-8 pt-8">
      <InputOutlinedBottom
        label="이메일"
        type="text"
        placeholder="omatasae@example.com"
        name="email"
        handleInputChange={handleInputChange}
        value={info.email}
      />
      <InputOutlinedBottom
        label="비밀번호"
        type="password"
        placeholder="omatase"
        name="password"
        handleInputChange={handleInputChange}
        value={info.password}
      />
    </form>
  );
};

export default LoginForm;
