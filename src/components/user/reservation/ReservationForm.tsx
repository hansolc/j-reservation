"use client";

import Form from "@/components/common/form";
import React from "react";
import {
  ReservationContainerProps,
  ReservationFormProps,
} from "@/types/Reservation";

const ReservationForm = ({
  isLoggedIn = false,
  formData,
  handleInputChange,
}: {
  // temporal fixed required ***
  isLoggedIn: boolean;
  formData: ReservationFormProps;
  handleInputChange: (field: string, value: any) => void;
}) => {
  const { googleLinks, adults, kids, date, time } = formData;

  return (
    <Form>
      <Form.Header>
        <p className="font-bold">1 번째 예약</p>
        <div>예약 대기중</div>
      </Form.Header>
      <Form.FieldContainer>
        <Form.Input
          label="구글 지도 음식점 링크 공유"
          type="link"
          placeholder="https://maps.google.com"
          value={googleLinks}
          onChange={(e) => handleInputChange("googleLinks", e.target.value)}
        ></Form.Input>
      </Form.FieldContainer>
      <Form.FieldContainer multiple>
        <Form.Input label="성인" type="adults" placeholder="0" seperate />
        <Form.Input label="어린이" type="kids" placeholder="0" />
      </Form.FieldContainer>
      <hr className="border-[#DDDDDD] my-4" />
      {!isLoggedIn ? (
        <>
          <Form.FieldContainer multiple>
            <Form.Input label="날짜" type="adults" placeholder="0" seperate />
            <Form.Input label="시간" type="kids" placeholder="0" />
          </Form.FieldContainer>
        </>
      ) : (
        [1, 2, 3].map((d) => {
          return (
            <Form.FieldContainer multiple key={`temp_${d}`}>
              <Form.Input label="날짜" type="adults" placeholder="0" seperate />
              <Form.Input label="시간" type="kids" placeholder="0" />
            </Form.FieldContainer>
          );
        })
      )}
    </Form>
  );
};

export default ReservationForm;
