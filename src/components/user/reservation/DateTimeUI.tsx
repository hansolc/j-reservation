import Form from "@/components/common/form";
import React from "react";

const DateTimeUI = ({
  date,
  time,
  onDateChange,
  onTimeChange,
  disabled,
  isSelectedTime = false,
}: {
  date: string;
  time: string;
  onDateChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  onTimeChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  disabled: boolean;
  isSelectedTime: boolean;
}) => {
  return (
    <Form.FieldContainer multiple isSelectedTime={isSelectedTime}>
      <Form.Input
        label={`날짜`}
        type="date"
        seperate
        value={date}
        onChange={onDateChange}
        disabled={disabled}
      />
      <Form.Input
        label={`시간`}
        type="time"
        value={time}
        onChange={onTimeChange}
        disabled={disabled}
      />
    </Form.FieldContainer>
  );
};

export default DateTimeUI;
