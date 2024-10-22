import Section from "@/components/common/section";
import FirstUserBanner from "@/components/user/FirstUserBanner";
import Goback from "@/components/user/GoBack";
import ReservationForm from "@/components/user/reservation/ReservationForm";
import React from "react";

const ReservationPage = () => {
  return (
    <Section>
      <div className="flex items-center font-bold">
        <Goback />
        예약확인
      </div>
      <FirstUserBanner />
      <ReservationForm />
    </Section>
  );
};

export default ReservationPage;
