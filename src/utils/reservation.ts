import {
  FormInfoInputHandleProps,
  FormInfoProps,
  NegativeReservationStatus,
  PositiveReservationStatus,
  ReservationAdminData,
  ReservationStatus,
  ServerReservationProps,
} from "@/types/reservation";

const seperateIsostring = (dateTime?: string) => {
  if (dateTime && dateTime.includes("T")) {
    const [date, time] = dateTime.split("T");
    return { date, time };
  }
  return { date: "", time: "" };
};

const getBadgeColor = (status: ReservationStatus) => {
  const posArray: ReservationStatus[] = ["WAITING", "AVAILABLE", "CONFIRMED"];
  const negArray: ReservationStatus[] = ["CANCELED", "UNAVAILABLE"];

  if (posArray.includes(status)) return "primary";
  else if (negArray.includes(status)) return "warning";
  else return "primary";
};

const pickReservationInfo = <T extends keyof FormInfoProps>(
  reservationInfo: FormInfoProps,
  keys: T[]
): Pick<FormInfoProps, T> => {
  const result = {} as Pick<FormInfoProps, T>;
  keys.forEach((key) => {
    if (key in reservationInfo) {
      result[key] = reservationInfo[key];
    }
  });

  return result;
};

const isostringToDateTime = (str: string) => {
  const date = new Date(str);
  return `${(date.getMonth() + 1).toString().length === 1 ? "0" : ""}${
    date.getMonth() + 1
  }/${
    date.getDate().toString().length === 1 ? "0" : ""
  }${date.getDate()} ${date.getHours()}:${date.getMinutes()}`;
};

const dateAndTimeToIsostring = (date: string, time: string) => {
  return `${date}T${time}`;
};

const reservationClientToServerData = (
  reservationInfo: FormInfoProps
): ServerReservationProps => {
  const {
    link,
    adults,
    kids,
    primaryDateTime,
    secondaryDateTime,
    tertiaryDateTime,
  } = reservationInfo;
  return {
    restaurant_link: link,
    adult_count: adults,
    child_count: kids,
    primary_date_time: primaryDateTime,
    ...(secondaryDateTime && { secondary_date_time: secondaryDateTime }),
    ...(tertiaryDateTime && { tertiary_date_time: tertiaryDateTime }),
  };
};

export {
  seperateIsostring,
  getBadgeColor,
  pickReservationInfo,
  isostringToDateTime,
  dateAndTimeToIsostring,
  reservationClientToServerData,
};
