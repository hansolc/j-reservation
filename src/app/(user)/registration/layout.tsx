import Goback from "@/components/user/GoBack";
import React from "react";

const RegistrationLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <section className="h-full relative">
      <Goback />
      <div className="p-5">{children}</div>
    </section>
  );
};

export default RegistrationLayout;
