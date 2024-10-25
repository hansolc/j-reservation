import Section from "@/components/common/section";
import Button from "@/components/user/button";
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
      <Link href="/">
        <FirstUserBanner className="mt-4" />
      </Link>
      <ReservationManager />
      <Link href="/reservation/1">
        <Button color="primary" size="full" className="mt-5">
          추가예약
        </Button>
      </Link>
    </Section>
  );
};

export default ReservationCheckPage;
