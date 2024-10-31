type ReservationKeys = "googleLinks" | "adults" | "kids" | "dateTimeArray";

interface ReservationManagerProps {
  isLoggedIn?: boolean;
  readonly?: boolean;
}

interface ReservationFormProps extends ReservationManagerProps {
  formData: ReservationFormDataProps;
  handleFormChange?: (
    field: ReservationKeys,
    e: React.ChangeEvent<HTMLInputElement>,
    arrayIndex?: number,
    innerIndex?: number
  ) => void;
}

interface ReservationFormDataProps {
  googleLinks: string;
  adults: number;
  kids: number;
  dateTimeArray: Array<[string, string]>;
}

interface ServerReservationProps {
  restaurant_link: string;
  adult_count: number;
  child_count: number;
  primary_date_time: string;
  secondary_date_time: string;
  tertiary_date_time: string;
}

export type {
  ReservationKeys,
  ReservationManagerProps,
  ReservationFormProps,
  ReservationFormDataProps,
  ServerReservationProps,
};
