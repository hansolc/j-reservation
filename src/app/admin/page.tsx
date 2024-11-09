import Section from "@/components/common/section";
import React from "react";
import ClientComponent from "./ClientComponent";

const AdminHomePage = () => {
  return (
    <Section className="flex flex-col items-center pt-40 max-w-[480px] m-auto">
      <Section.Text fontSize={50} bold>
        오마타세
      </Section.Text>
      <ClientComponent />
    </Section>
  );
};

export default AdminHomePage;
