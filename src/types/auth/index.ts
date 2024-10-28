import { ChangeEvent } from "react";

interface AuthProps {
  email: string;
  password: string;
}

interface LoginFormProps {
  info: AuthProps;
  handleChange: (T: ChangeEvent<HTMLInputElement>) => void;
}

export type { AuthProps, LoginFormProps };
