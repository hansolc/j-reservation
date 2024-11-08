"use client";

import { useAuth } from "@/components/common/AuthContext";
import Button from "@/components/user/button";
import LoginForm from "@/components/user/LoginForm";
import useRegistration from "@/components/user/registration/useRegistration";
import React from "react";

const SubmitButton = ({
  handleClick,
  children,
}: {
  handleClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Button color="primary" size="lg" className="mt-20" onClick={handleClick}>
      {children}
    </Button>
  );
};

const ClientComponent = () => {
  const { info, handleInputChange, registration } = useRegistration();
  const { userLogin } = useAuth();

  return (
    <>
      <LoginForm info={info} handleChange={handleInputChange} />
      <SubmitButton handleClick={() => userLogin(info)}>로그인</SubmitButton>
    </>
  );
};

export default ClientComponent;
