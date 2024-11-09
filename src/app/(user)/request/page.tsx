import Section from "@/components/common/section";
import FirstUserBanner from "@/components/user/FirstUserBanner";
import Goback from "@/components/user/GoBack";
import SectionHeader from "@/components/user/SectionHeader";
import SectionHeaderWithBack from "@/components/user/SectionHeaderWithBack";
import React from "react";
import ClientComponent from "./ClientComponent";

const RequestPage = () => {
  return (
    <>
      <SectionHeaderWithBack>문의하기</SectionHeaderWithBack>
      <FirstUserBanner className="my-4" />
      <ClientComponent />
    </>
  );
};

export default RequestPage;
