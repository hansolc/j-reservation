import Form from "@/components/common/form";
import React from "react";
import { ReservationFormProps } from "@/types/Reservation";

const ReservationForm = ({
  isLoggedIn = false,
  formData,
  handleFormChange,
}: ReservationFormProps) => {
  const { googleLinks, adults, kids } = formData;

  return (
    <Form>
      <Form.Header>
        <p className="font-bold">1 번째 예약</p>
        <div>예약 대기중</div>
      </Form.Header>
      <Form.FieldContainer>
        <Form.Input
          label="구글 지도 음식점 링크 공유"
          placeholder="https://maps.google.com"
          value={googleLinks}
          onChange={(e) => handleFormChange("googleLinks", e.target.value)}
          name="googleLinks"
        ></Form.Input>
      </Form.FieldContainer>
      <Form.FieldContainer multiple>
        <Form.Input
          label="성인"
          placeholder="0"
          seperate
          value={adults}
          onChange={(e) => handleFormChange("adults", e.target.value)}
        />
        <Form.Input
          label="어린이"
          placeholder="0"
          value={kids}
          onChange={(e) => handleFormChange("kids", e.target.value)}
        />
      </Form.FieldContainer>
      <hr className="border-[#DDDDDD] my-4" />
      {!isLoggedIn ? (
        <>
          <Form.FieldContainer multiple>
            <Form.Input label="날짜" type="date" placeholder="0" seperate />
            <Form.Input label="시간" type="time" placeholder="0" />
          </Form.FieldContainer>
        </>
      ) : (
        // ***uuid를 써야 하나?
        formData.dateTimeArray.map(([date, time], idx) => {
          return (
            <Form.FieldContainer
              multiple
              key={`multiple_input_keys${date}_${idx}_container`}
            >
              <Form.Input
                label="날짜"
                type="date"
                placeholder="0"
                seperate
                value={date}
                onChange={(e) =>
                  handleFormChange("dateTimeArray", e.target.value, idx, 0)
                }
              />
              <Form.Input
                label="시간"
                type="time"
                placeholder="0"
                value={time}
                onChange={(e) =>
                  handleFormChange("dateTimeArray", e.target.value, idx, 1)
                }
              />
            </Form.FieldContainer>
          );
        })
      )}
    </Form>
  );
};

export default ReservationForm;
