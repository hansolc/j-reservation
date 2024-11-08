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

const data: Array<ServerViewReservationProps> = [
  {
    reservationId: 1,
    restaurant_link:
      "https://www.google.com/maps/place/%EB%A7%88%EC%9E%A5%EB%8F%99+%ED%95%9C%EC%9A%B0%EC%B4%8C/data=!4m6!3m5!1s0x357ca4aab7a37341:0x57e6703998ac9ae1!8m2!3d37.570638!4d127.0412537!16s%2Fg%2F1tj4d_bn?entry=ttu&g_ep=EgoyMDI0MTAyOS4wIKXMDSoASAFQAw%3D%3D",
    adult_count: 2,
    child_count: 2,
    primary_date_time: "2024-12-31T04:00:00",
    secondary_date_time: "2024-12-31T05:00:00",
    status: "CONFIRMED",
  },
  {
    reservationId: 27,
    restaurant_link:
      "https://www.google.com/maps/place/%EC%9D%B4%EB%A7%88%ED%8A%B8+%EC%B2%AD%EA%B3%84%EC%B2%9C%EC%A0%90/data=!4m6!3m5!1s0x357ca34926396897:0x60f507c6a9bdf064!8m2!3d37.5710434!4d127.0222296!16s%2Fg%2F1tkp2xz1?entry=ttu&g_ep=EgoyMDI0MTEwNi4wIKXMDSoASAFQAw%3D%3D",
    adult_count: 1,
    child_count: 2,
    primary_date_time: "2024-01-01T01:00:00",
    secondary_date_time: "2024-01-01T02:00:00",
    available_date_time: "2024-01-01T02:00:00",
    status: "AVAILABLE",
  },
];

const ReservationCheckPage = () => {
  const [reservations, setReservations] = useState<Array<FormInfoProps>>([]);
  const router = useRouter();
  const { userId } = useAuth();
  // const { data, isSuccess } = useQuery({
  //   queryKey: ["reservation", userId],
  //   queryFn: () => getReservationInfoByUser(userId),
  //   enabled: !!userId,
  // });
  useEffect(() => {
    if (data) {
      // if (data && isSuccess) {
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
  }, [data]);
  // [data, isSuccess]);
  return (
    <Section>
      <Section.Text className="flex items-center gap-3" bold fontSize={20}>
        <Goback />
        예약확인
      </Section.Text>
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
        onClick={() => router.push("/reservation/2")}
      >
        추가로 예약하기
      </Button>
    </Section>
  );
};

export default ReservationCheckPage;
