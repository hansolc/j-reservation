import Section from "@/components/common/section";
import FirstUserBanner from "@/components/user/FirstUserBanner";
import Goback from "@/components/user/GoBack";
import ReservationManager from "@/components/user/reservation/ReservationManager";
import Link from "next/link";
import React from "react";

const ReservationCheckPage = async () => {
  // get reservation info api here

  return (
    <Section>
      <Section.Text className="flex items-center gap-3" bold fontSize={20}>
        <Goback />
        예약확인
      </Section.Text>
      <div>
        <Link href="/">
          <FirstUserBanner />
        </Link>
      </div>
      <ReservationManager />
    </Section>
  );
};

export default ReservationCheckPage;
