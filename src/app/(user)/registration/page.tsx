import React from "react";
import SectionHeader from "@/components/user/SectionHeader";
import RegistrationManager from "@/components/user/registration/RegistrationManager";

const RegistrationPage = () => {
  return (
    <>
      <SectionHeader text={["회원가입을 위해", "정보를 입력해주세요"]} />
      <RegistrationManager type="regis" />
    </>
  );
};

export default RegistrationPage;
