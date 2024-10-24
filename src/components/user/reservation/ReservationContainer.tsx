"use client";

import React, { useState } from "react";
import ReservationForm from "./ReservationForm";
import Button from "../button";
import {
  ReservationContainerProps,
  ReservationFormProps,
} from "@/types/Reservation";

const ReservationContainer = ({
  isLoggedIn = true,
}: ReservationContainerProps) => {
  const [formData, setFormData] = useState<ReservationFormProps>({
    googleLinks: "",
    adults: 0,
    kids: 0,
    date: new Date(),
    time: "",
  });

  const handleInputChange = (field, value) => {
    setFormData({
      ...formData,
      [field]: value,
    });
  };

  const handleSubmit = () => {
    console.log(formData);
  };

  return (
    <div className="flex flex-col items-center gap-5">
      <ReservationForm
        isLoggedIn={isLoggedIn}
        formData={formData}
        handleInputChange={handleInputChange}
      />
      {isLoggedIn && (
        <Button color="primary" size="sm" isRadius onClick={handleSubmit}>
          예약요청
        </Button>
      )}
    </div>
  );
};

export default ReservationContainer;
