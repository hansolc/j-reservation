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

export type {
  ReservationKeys,
  ReservationManagerProps,
  ReservationFormProps,
  ReservationFormDataProps,
};
