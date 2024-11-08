import {
  FormInfoProps,
  NegativeReservationStatus,
  PositiveReservationStatus,
  ReservationAdminData,
  ReservationStatus,
} from "@/types/reservation";

const seperateIsostring = (dateTime?: string) => {
  if (dateTime && dateTime.includes("T")) {
    const [date, time] = dateTime.split("T");
    return { date, time };
  }
  return { date: "", time: "" };
};

const getBadgeColor = (status: ReservationStatus) => {
  const posArray: PositiveReservationStatus[] = [
    "WAITING",
    "AVAILABLE",
    "CONFIRMED",
  ];
  const negArray: NegativeReservationStatus[] = ["CANCELED", "UNAVAILABLE"];

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
  return `${date.getMonth()}/${date.getDate()} ${date.getHours()}:${
    date.getMinutes() ?? 0
  }${date.getMinutes()}`;
};

const dateAndTimeToIsostring = (date: string, time: string) => {
  return `${date}T${time}`;
};

export {
  seperateIsostring,
  getBadgeColor,
  pickReservationInfo,
  isostringToDateTime,
  dateAndTimeToIsostring,
};
