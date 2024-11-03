import { ChangeEvent } from "react";

interface AuthProps {
  username: string;
  password: string;
}

interface LoginFormProps {
  info: AuthProps;
  handleChange: (T: ChangeEvent<HTMLInputElement>) => void;
}

interface RegistrationSubmit extends AuthProps {
  role: "admin" | "user";
}

export type { AuthProps, LoginFormProps, RegistrationSubmit };
