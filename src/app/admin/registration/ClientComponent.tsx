"use client";

import SubmitButton from "@/components/admin/SubmitButton";
import LoginForm from "@/components/user/LoginForm";
import useRegistration from "@/components/user/registration/useRegistration";
import React from "react";

const ClientComponent = () => {
  const { info, handleInputChange, registration } = useRegistration();

  return (
    <>
      <LoginForm info={info} handleChange={handleInputChange} />
      <SubmitButton
        handleClick={() => registration({ ...info, role: "admin" })}
      >
        회원가입
      </SubmitButton>
    </>
  );
};

export default ClientComponent;
