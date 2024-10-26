import Form from "@/components/common/form";
import React from "react";
import { ReservationFormProps, ReservationKeys } from "@/types/reservation";

const ReservationForm = ({
  readonly,
  formData,
  handleFormChange,
  isLoggedIn,
}: ReservationFormProps) => {
  const { googleLinks, adults, kids, dateTimeArray } = formData;

  // curring
  const handleChange = (field: ReservationKeys, idx1?: number, idx2?: number) =>
    handleFormChange
      ? (e: React.ChangeEvent<HTMLInputElement>) =>
          handleFormChange(field, e, idx1, idx2)
      : undefined;

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
          onChange={handleChange("googleLinks")}
          name="googleLinks"
          disabled={!handleFormChange || readonly}
          readOnly={!handleFormChange}
        ></Form.Input>
      </Form.FieldContainer>
      <Form.FieldContainer multiple>
        <Form.Input
          label="성인"
          placeholder="0"
          seperate
          value={adults}
          onChange={handleChange("adults")}
          disabled={!handleFormChange || readonly}
          readOnly={!handleFormChange}
        />
        <Form.Input
          label="어린이"
          placeholder="0"
          value={kids}
          onChange={handleChange("kids")}
          disabled={!handleFormChange || readonly}
          readOnly={!handleFormChange}
        />
      </Form.FieldContainer>
      <hr className="border-[#DDDDDD] my-4" />
      {isLoggedIn
        ? dateTimeArray.map(([date, time], idx) => {
            return (
              <Form.FieldContainer multiple key={`temporal_idx_${idx}`}>
                <Form.Input
                  label="날짜"
                  type="date"
                  seperate
                  value={date}
                  onChange={handleChange("dateTimeArray", idx, 0)}
                  disabled={!handleFormChange || readonly}
                />
                <Form.Input
                  label="시간"
                  type="time"
                  value={time}
                  onChange={handleChange("dateTimeArray", idx, 1)}
                  disabled={!handleFormChange || readonly}
                />
              </Form.FieldContainer>
            );
          })
        : null}
    </Form>
  );
};

export default ReservationForm;
