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
import useUserFetchRequest from "@/components/user/hooks/request/useUserFetchRequest";
import useUserFetchReservation from "@/components/user/hooks/useUserFetchReservation";

const ReservationCheckPage = () => {
  const router = useRouter();
  const { data, isLoading } = useUserFetchReservation();

  if (!data) {
    return <p>...loading</p>;
  }
  return (
    <Section>
      <SectionHeaderWithBack>예약확인</SectionHeaderWithBack>
      <FirstUserBanner className="mt-4" />
      {data.length > 0 ? (
        <>
          {isLoading && <p>데이터 업데이트 중입니다...</p>}
          {data.map((r, index) => {
            return (
              <ReservationForm
                key={`reservation_check_${r.id}`}
                formInfo={r}
                nth={index + 1}
              />
            );
          })}
        </>
      ) : (
        <p className="text-center pt-4">예약 내역이 없습니다.</p>
      )}
      <Button
        color="primary"
        size="full"
        className="mt-5"
        onClick={() => router.push(`/reservation/${data.length + 1}`)}
      >
        추가로 예약하기
      </Button>
    </Section>
  );
};

export default ReservationCheckPage;
