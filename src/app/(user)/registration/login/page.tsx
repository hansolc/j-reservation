import RegistrationManager from "@/components/user/registration/RegistrationManager";
import SectionHeader from "@/components/user/SectionHeader";
import React from "react";

const RegistrationLoginPage = () => {
  return (
    <>
      <SectionHeader text={["로그인하기"]} />
      <RegistrationManager type="login" />
    </>
  );
};

export default RegistrationLoginPage;
