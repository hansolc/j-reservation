type PositiveReservationStatus = "WAITING" | "AVAILABLE" | "CONFIRMED";
type NegativeReservationStatus = "UNAVAILABLE" | "CANCELED";
type ReservationStatus = PositiveReservationStatus & NegativeReservationStatus;

// Reservation Form
interface FormInfoProps {
  id: number;
  link: string;
  adults: number;
  kids: number;
  status: ReservationStatus;
  primaryDateTime: string;
  secondaryDateTime?: string;
  tertiaryDateTime?: string;
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

interface ServerViewReservationProps extends ServerReservationProps {
  reservationId: number;
  status: ReservationStatus;
}

export type {
  ReservationFormProps,
  ServerReservationProps,
  ServerViewReservationProps,
  FormInfoProps,
  ReservationStatus,
  PositiveReservationStatus,
  NegativeReservationStatus,
};
