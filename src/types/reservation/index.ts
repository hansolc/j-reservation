type PositiveReservationStatus = "WAITING" | "AVAILABLE" | "CONFIRMED";
type NegativeReservationStatus = "UNAVAILABLE" | "CANCELED";
type ReservationStatus = PositiveReservationStatus | NegativeReservationStatus;

// Reservation Form
interface ReservationBaseProps {
  id: number;
  link: string;
  adults: number;
  kids: number;
  status: ReservationStatus;
}

interface ReservationDateTimeProps {
  primaryDateTime: string;
  secondaryDateTime?: string;
  tertiaryDateTime?: string;
  availableDateTime?: string;
}

type FormInfoProps = ReservationBaseProps & ReservationDateTimeProps;

interface FormInfoInputHandleProps extends FormInfoProps {
  pDate: string;
  pTime: string;
  sDate?: string;
  sTime?: string;
  tDate?: string;
  tTime?: string;
}

interface ReservationAdminData extends FormInfoProps {
  createdAt: string;
  userId: number;
  username: string;
}

interface ReservationFormProps {
  formInfo?: FormInfoProps;
  controlable?: boolean;
  readonly?: boolean;
  nth?: number;
}

// ======================================================================

interface ServerReservationProps {
  restaurant_link: string;
  adult_count: number;
  child_count: number;
  primary_date_time: string;
  secondary_date_time?: string;
  tertiary_date_time?: string;
}

interface ServerReservationUpdateProps {
  reservationId: number;
  status: ReservationStatus;
  available_date_time?: string;
}

type ServerViewReservationProps = ServerReservationProps &
  ServerReservationUpdateProps;

interface ServerViewAdminReservationProps extends ServerViewReservationProps {
  createdAt: string;
  userId: number;
  username: string;
}

interface ServerUpdateReservationProps {
  reservationId: number;
  status: "AVAILABLE" | "UNAVAILABLE";
  selectedDateTime?: string;
}

export type {
  ReservationFormProps,
  ServerReservationProps,
  ServerViewReservationProps,
  FormInfoProps,
  ReservationStatus,
  PositiveReservationStatus,
  NegativeReservationStatus,
  ServerViewAdminReservationProps,
  ReservationAdminData,
  ReservationDateTimeProps,
  ServerReservationUpdateProps,
  ServerUpdateReservationProps,
  FormInfoInputHandleProps,
};
