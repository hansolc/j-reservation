type ReservationKeys = "googleLinks" | "adults" | "kids" | "dateTimeArray";

interface ReservationManagerProps {
  isLoggedIn?: boolean;
}

interface ReservationFormProps extends ReservationManagerProps {
  formData: ReservationFormDataProps;
  handleFormChange: (
    field: ReservationKeys,
    value: string,
    idx1?: number,
    idx2?: number
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
