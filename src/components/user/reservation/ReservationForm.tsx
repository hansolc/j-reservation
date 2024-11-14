"use client";

import Form from "@/components/common/form";
import { ReservationFormProps } from "@/types/reservation";
import { dateAndTimeToIsostring } from "@/utils/reservation";
import React, { useCallback, useMemo, useState } from "react";
import DateTimeUI from "./DateTimeUI";
import Button from "../button";
import { useAuth } from "@/components/common/AuthContext";
import { RESERVATION_STATUS } from "@/constant";
import Badge from "@/components/common/badge";
import ReservationConfirmButton from "./ReservationConfirmButton";
import useReservationForm from "../hooks/reservationForm/useReservationForm";

const ReservationForm = ({
  formInfo,
  controlable = false,
  nth = 1,
}: ReservationFormProps) => {
  const { formData, handleChange, handleSubmit, dateTimeFields } =
    useReservationForm(formInfo);

  const { isAuthenticated } = useAuth();
  const { id, link, adults, kids, status, availableDateTime } = formData;

  const isControllable = useMemo(
    (): boolean => isAuthenticated && controlable,
    [isAuthenticated, controlable]
  );

  return (
    <Form
      onSubmit={handleSubmit}
      className={`mb-10 ${
        status === "CONFIRMED" && "border-primary border-2"
      } ${status === "UNAVAILABLE" && "border-warn border-2"}`}
    >
      <Form.Header>
        <p className="font-bold">{`${nth} 번째 예약`}</p>
        {!controlable && (
          <Badge
            isRadius
            // HACKY WAY NEED TO FIX!
            color={status === "UNAVAILABLE" ? "warning" : "primary"}
          >
            {RESERVATION_STATUS[status || "WAITING"]}
          </Badge>
        )}
      </Form.Header>
      <Form.FieldContainer>
        <Form.Input
          label="구글 지도 음식점 링크 공유"
          placeholder="https://maps.google.com"
          value={link}
          onChange={handleChange("link")}
          disabled={!isControllable}
        ></Form.Input>
      </Form.FieldContainer>
      <Form.FieldContainer multiple>
        <Form.Input
          label="성인"
          placeholder="0"
          value={adults}
          onChange={handleChange("adults")}
          disabled={!isControllable}
        />
        <Form.Input
          label="어린이"
          placeholder="0"
          value={kids}
          onChange={handleChange("kids")}
          disabled={!isControllable}
        />
      </Form.FieldContainer>
      <hr className="border-[#DDDDDD] my-4" />
      {dateTimeFields
        .filter((obj) => {
          return isControllable || (!isControllable && obj.date);
        })
        .map((field, idx) => {
          return (
            <DateTimeUI
              // must change idx => uuid by "uuid" {v4}
              key={`date_time_array_${link}_${field.time}_${idx + 1}`}
              date={field.date}
              time={field.time}
              onDateChange={handleChange(field.dateField)}
              onTimeChange={handleChange(field.timeField)}
              disabled={!isControllable}
              isSelectedTime={
                dateAndTimeToIsostring(field.date, field.time) ===
                availableDateTime
              }
            />
          );
        })}
      <ReservationConfirmButton
        id={id}
        status={status}
        nth={nth}
        dateTime={availableDateTime ?? ""}
      />
      {isControllable && (
        <Button color="primary" size="sm" isRadius type="submit">
          예약하기
        </Button>
      )}
    </Form>
  );
};

export default ReservationForm;
