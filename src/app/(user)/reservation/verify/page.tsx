"use client";

import endpoint from "@/api/apiConfig";
import Section from "@/components/common/section";
import Goback from "@/components/user/GoBack";
import useUserFetchReservation from "@/components/user/hooks/useUserFetchReservation";
import ReservationForm from "@/components/user/reservation/ReservationForm";
import {
  FormInfoProps,
  ServerReservationProps,
  ServerViewReservationProps,
} from "@/types/reservation";
import { useSearchParams } from "next/navigation";
import React, { Suspense } from "react";

const ReservationVerifyPage = () => {
  const queryparam = useSearchParams();
  const reservationId = queryparam.get("reservationId");
  const nth = queryparam.get("nth");
  const { specificReservationInfo } = useUserFetchReservation({
    forceFetch: true,
    reservationId: Number(reservationId),
  });

  return (
    <Suspense>
      <Section className="flex flex-col">
        <Goback />
        <Section.Text bold fontSize={23}>
          다시 한번 더<br />
          예약 정보를 확인해 주세요
        </Section.Text>
        <Section.Text fontSize={15} outlined>
          예약 취소는 불가하지만 만약 취소를 해야 한다면
          <br />
          문의하기를 통해 꼭 알려주세요
        </Section.Text>
        {/* <ReservationForm formInfo={specificReservationInfo} /> */}
        {specificReservationInfo && (
          <ReservationForm
            formInfo={specificReservationInfo}
            nth={Number(nth)}
          />
        )}
      </Section>
    </Suspense>
  );
};

export default ReservationVerifyPage;
