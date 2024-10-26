import Section from "@/components/common/section";
import Button from "@/components/user/button";
import FirstUserBanner from "@/components/user/FirstUserBanner";
import Goback from "@/components/user/GoBack";
import ReservationForm from "@/components/user/reservation/ReservationForm";
import { ReservationFormDataProps } from "@/types/reservation";
import Link from "next/link";
import React from "react";

const temp: ReservationFormDataProps = {
  googleLinks: "",
  adults: 0,
  kids: 0,
  dateTimeArray: Array(3).fill([
    new Date().toISOString().split("T")[0],
    "00:00",
  ]),
};

const ReservationCheckPage = async () => {
  // get reservation info api here

  return (
    <Section>
      <Section.Text className="flex items-center gap-3" bold fontSize={20}>
        <Goback />
        예약확인
      </Section.Text>
      <FirstUserBanner className="mt-4" />

      <ReservationForm formData={temp} readonly isLoggedIn={true} />
      <Link href="/reservation/1">
        <Button color="primary" size="full" className="mt-5">
          추가예약
        </Button>
      </Link>
    </Section>
  );
};

export default ReservationCheckPage;
