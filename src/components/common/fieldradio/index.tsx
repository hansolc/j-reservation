import React, { ButtonHTMLAttributes } from "react";
import cls from "classnames";
import {
  ReservationAdminData,
  ReservationDateTimeProps,
} from "@/types/reservation";
import { isostringToDateTime, pickReservationInfo } from "@/utils/reservation";
import useSelectDateTime from "../hooks/useSelectDateTime";

const Button = ({
  children,
  disabled,
  ...rest
}: {
  children: React.ReactNode;
} & React.ButtonHTMLAttributes<HTMLButtonElement>) => {
  const btnClass = cls(
    { "bg-primary": !disabled },
    { "bg-grey": disabled },
    "rounded-md",
    "px-6",
    "py-1",
    "text-sm",
    "text-white",
    "ml-auto"
  );
  return (
    <button className={btnClass} {...rest}>
      {children}
    </button>
  );
};

const BaseRadioBox = ({
  children,
  htmlFor,
  className,
  ...rest
}: {
  children: React.ReactNode;
  htmlFor: string;
} & React.InputHTMLAttributes<HTMLInputElement>) => {
  return (
    <div className={className}>
      <input type="radio" {...rest} />
      <label htmlFor={htmlFor}>{children}</label>
    </div>
  );
};

const BlankContainer = ({ ...rest }: React.HTMLAttributes<HTMLDivElement>) => {
  return <div {...rest}></div>;
};

const RadioboxList = ({
  dateTimeArray,
  id,
  handleSelect,
  selectedTime,
}: {
  dateTimeArray: Array<string | undefined>;
  id: number;
  handleSelect: (e: React.ChangeEvent<HTMLInputElement>) => void;
  selectedTime: string;
}) => {
  return (
    <>
      {dateTimeArray.map((time, idx) => {
        if (!time)
          return (
            <BlankContainer
              className="flex-1"
              key={`reservation_empty_${id + 1}_${id}`}
            />
          );
        return (
          <BaseRadioBox
            key={`reservation_radio_box_priority_${idx + 1}_id_${id}`}
            id={`${time}_reservation_id_${id}`}
            name={`reservation_id_${id}`}
            value={time}
            htmlFor={`${time}_reservation_id_${id}`}
            className="flex-1"
            onChange={handleSelect}
            checked={selectedTime === time}
          >
            {`${idx + 1}순위 ${isostringToDateTime(time)}`}
          </BaseRadioBox>
        );
      })}
      <BaseRadioBox
        id={`deny_reservation_id_${id}`}
        name={`reservation_id_${id}`}
        value={"UNAVAILABLE"}
        htmlFor={`deny_reservation_id_${id}`}
        className="ml-auto pr-4"
        onChange={handleSelect}
      >
        예약불가
      </BaseRadioBox>
    </>
  );
};

const DateTimeFieldset = ({
  reservationInfo,
}: {
  reservationInfo: ReservationAdminData;
}) => {
  const { id } = reservationInfo;
  const {
    handleSelect,
    selectedTime,
    dateTimeArray,
    updateReservation,
    isDisabled,
  } = useSelectDateTime({
    reservationInfo,
  });

  return (
    <fieldset className="flex flex-1" disabled={isDisabled}>
      <RadioboxList
        dateTimeArray={dateTimeArray}
        id={id}
        handleSelect={handleSelect}
        selectedTime={selectedTime}
      />
      <Button
        type="button"
        disabled={isDisabled}
        onClick={() => updateReservation()}
      >
        변경
      </Button>
    </fieldset>
  );
};

export default DateTimeFieldset;
