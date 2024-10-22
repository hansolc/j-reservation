"use client";

import Form from "@/components/common/form";
import React from "react";

const ReservationForm = () => {
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
        ></Form.Input>
      </Form.FieldContainer>
      <Form.FieldContainer multiple>
        <Form.Input label="성인" type="adults" placeholder="0" seperate />
        <Form.Input label="어린이" type="kids" placeholder="0" />
      </Form.FieldContainer>
      <hr className="border-[#DDDDDD] my-4" />
      {[1, 2, 3].map((d) => {
        return (
          <Form.FieldContainer multiple key={`temp_${d}`}>
            <Form.Input label="날짜" type="adults" placeholder="0" seperate />
            <Form.Input label="시간" type="kids" placeholder="0" />
          </Form.FieldContainer>
        );
      })}
    </Form>
  );
};

export default ReservationForm;
