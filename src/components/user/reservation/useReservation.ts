"use client";

import { ReservationFormDataProps, ReservationKeys } from "@/types/Reservation";
import { useState } from "react";
import { useRouter } from "next/navigation";

const useReservation = () => {
  const router = useRouter();
  const [formData, setFormData] = useState<ReservationFormDataProps>({
    googleLinks: "",
    adults: 0,
    kids: 0,
    dateTimeArray: Array(3).fill([
      new Date().toISOString().split("T")[0],
      "00:00",
    ]),
  });

  // parameter type assertion need
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const handleFormChange = (
    field: ReservationKeys,
    value: string,
    arrayIndex: number | undefined,
    innerIndex: number | undefined
  ) => {
    if (
      field === "dateTimeArray" &&
      arrayIndex !== undefined &&
      innerIndex !== undefined
    ) {
      setFormData((prevData) => {
        const updatedDateTimeArray = [...prevData.dateTimeArray];
        updatedDateTimeArray[arrayIndex] = [
          ...updatedDateTimeArray[arrayIndex],
        ];
        updatedDateTimeArray[arrayIndex][innerIndex] = value;

        return {
          ...prevData,
          dateTimeArray: updatedDateTimeArray,
        };
      });
    } else {
      setFormData({
        ...formData,
        [field]: value,
      });
    }
  };

  const createReservation = () => {
    router.push("/reservation/success");
  };

  return { formData, handleFormChange, createReservation };
};

export default useReservation;
