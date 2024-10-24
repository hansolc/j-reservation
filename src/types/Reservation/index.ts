interface ReservationContainerProps {
  isLoggedIn: boolean;
}

interface ReservationFormProps {
  googleLinks: string;
  adults: number;
  kids: number;
  date: Date;
  time: string;
}

export type { ReservationContainerProps, ReservationFormProps };
