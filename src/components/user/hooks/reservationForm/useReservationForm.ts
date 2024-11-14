import { FormInfoProps, ReservationStatus } from "@/types/reservation";
import {
  dateAndTimeToIsostring,
  reservationClientToServerData,
  seperateIsostring,
} from "@/utils/reservation";
import React, { useCallback, useMemo, useState } from "react";
import useUserPostReservation from "../useUserPostReservation";
import { useRouter } from "next/navigation";

const formInfoDefault = {
  id: 0,
  link: "",
  adults: 0,
  kids: 0,
  primaryDateTime: "",
  secondaryDateTime: "",
  tertiaryDateTime: "",
  status: "WAITING" as ReservationStatus,
};

const useReservationForm = (formInfo: FormInfoProps = formInfoDefault) => {
  const { createReservation } = useUserPostReservation();
  const router = useRouter();
  const initialInfo = useMemo(() => {
    return {
      ...formInfo,
      pDate: seperateIsostring(formInfo?.primaryDateTime).date,
      pTime: seperateIsostring(formInfo?.primaryDateTime).time,
      sDate: seperateIsostring(formInfo?.secondaryDateTime).date,
      sTime: seperateIsostring(formInfo?.secondaryDateTime).time,
      tDate: seperateIsostring(formInfo?.tertiaryDateTime).date,
      tTime: seperateIsostring(formInfo?.tertiaryDateTime).time,
    };
  }, [formInfo]);

  const [formData, setFormData] = useState(initialInfo);
  const { pDate, pTime, sDate, sTime, tDate, tTime } = formData;

  const handleChange = useCallback((field: string) => {
    return (e: React.ChangeEvent<HTMLInputElement>) => {
      const { value } = e.target;

      setFormData((prevState) => {
        return {
          ...prevState,
          [field]: value,
        };
      });
    };
  }, []);

  const reformedToFormInfo = (): FormInfoProps => {
    return {
      id: formInfo.id,
      adults: formData.adults,
      kids: formData.kids,
      link: formData.link,
      primaryDateTime: dateAndTimeToIsostring(formData.pDate, formData.pTime),
      status: "WAITING",
      ...(formData.sDate &&
        formData.sTime && {
          secondaryDateTime: dateAndTimeToIsostring(
            formData.sDate,
            formData.sTime
          ),
        }),
      ...(formData.tDate &&
        formData.tTime && {
          tertiaryDateTime: dateAndTimeToIsostring(
            formData.tDate,
            formData.tTime
          ),
        }),
    };
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const data: FormInfoProps = reformedToFormInfo();
    const dataToServer = reservationClientToServerData(data);

    createReservation(dataToServer, {
      onSuccess: () => router.push("/reservation/success"),
    });
  };

  const dateTimeFields: Array<{
    date: string;
    time: string;
    dateField: string;
    timeField: string;
  }> = [
    {
      date: pDate,
      time: pTime,
      dateField: "pDate",
      timeField: "pTime",
    },
    {
      date: sDate,
      time: sTime,
      dateField: "sDate",
      timeField: "sTime",
    },
    {
      date: tDate,
      time: tTime,
      dateField: "tDate",
      timeField: "tTime",
    },
  ];

  return {
    formData,
    handleChange,
    handleSubmit,
    dateTimeFields,
  };
};

export default useReservationForm;
