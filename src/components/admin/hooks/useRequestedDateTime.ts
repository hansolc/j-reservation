"use client";

import { FormInfoProps, ReservationDateTimeProps } from "@/types/reservation";
import { pickReservationInfo } from "@/utils/reservation";
import React from "react";

const keys: Array<keyof ReservationDateTimeProps> = [
  "primaryDateTime",
  "secondaryDateTime",
  "tertiaryDateTime",
  "availableDateTime",
];

const useRequestedDateTime = ({
  reservationInfo,
}: {
  reservationInfo: FormInfoProps;
}) => {
  const requestedDateTime = pickReservationInfo(reservationInfo, keys);
};

export default useRequestedDateTime;
