"use client";

import React from "react";
import ReservationForm from "./ReservationForm";
import Button from "../button";
import { ReservationManagerProps } from "@/types/reservation";
import useReservation from "./useReservation";

const ReservationManager = ({
  isLoggedIn = false,
  readonly = false,
}: ReservationManagerProps) => {
  const { formData, handleFormChange, createReservation } = useReservation();
  return (
    <div className="flex flex-col items-center gap-5">
      <ReservationForm
        readonly={readonly}
        formData={formData}
        handleFormChange={isLoggedIn ? handleFormChange : undefined}
      />
      {isLoggedIn && (
        <Button color="primary" size="sm" isRadius onClick={createReservation}>
          예약요청
        </Button>
      )}
    </div>
  );
};

export default ReservationManager;
