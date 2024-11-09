"use client";

/* eslint-disable @typescript-eslint/no-unused-vars */
import { getReservationInfoByUser } from "@/api/service/reservation";
import Section from "@/components/common/section";
import Button from "@/components/user/button";
import FirstUserBanner from "@/components/user/FirstUserBanner";
import Goback from "@/components/user/GoBack";
import ReservationForm from "@/components/user/reservation/ReservationForm";
import {
  FormInfoProps,
  PositiveReservationStatus,
  ServerViewReservationProps,
} from "@/types/reservation";
import { redirect } from "next/navigation";
import { cookies } from "next/headers";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { jwtDecode } from "jwt-decode";
import useLoggedIn from "@/components/common/auth/useLoggedIn";
import useReservation from "@/components/user/reservation/useReservation";
import { useQuery } from "@tanstack/react-query";
import { useAuth } from "@/components/common/AuthContext";
import { useRouter } from "next/navigation";
import SectionHeaderWithBack from "@/components/user/SectionHeaderWithBack";

const ReservationCheckPage = () => {
  const [reservations, setReservations] = useState<Array<FormInfoProps>>([]);
  const router = useRouter();
  const { userId } = useAuth();
  const { data, isSuccess } = useQuery({
    queryKey: ["reservation", userId],
    queryFn: () => getReservationInfoByUser(userId),
    enabled: !!userId,
  });
  useEffect(() => {
    if (data && isSuccess) {
      console.log(data);
      const reformedData: Array<FormInfoProps> = data?.map((d) => {
        return {
          adults: d.adult_count,
          kids: d.child_count,
          id: d.reservationId,
          link: d.restaurant_link,
          status: d.status,
          primaryDateTime: d.primary_date_time,
          ...(d.secondary_date_time
            ? { secondaryDateTime: d.secondary_date_time }
            : {}),
          ...(d.tertiary_date_time
            ? { tertiaryDateTime: d.tertiary_date_time }
            : {}),
          ...(d.available_date_time
            ? { availableDateTime: d.available_date_time }
            : {}),
        };
      });
      setReservations(reformedData);
    }
  }, [data, isSuccess]);
  return (
    <Section>
      <SectionHeaderWithBack>예약확인</SectionHeaderWithBack>
      <FirstUserBanner className="mt-4" />
      {reservations.length > 0 ? (
        reservations.map((r, index) => {
          return (
            <ReservationForm
              key={`reservation_check_${r.id}`}
              formInfo={r}
              nth={index + 1}
            />
          );
        })
      ) : (
        <p className="text-center pt-4">예약 내역이 없습니다.</p>
      )}
      <Button
        color="primary"
        size="full"
        className="mt-5"
        onClick={() => router.push(`/reservation/${reservations.length + 1}`)}
      >
        추가로 예약하기
      </Button>
    </Section>
  );
};

export default ReservationCheckPage;
