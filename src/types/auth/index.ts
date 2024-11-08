import { ChangeEvent } from "react";

interface AuthProps {
  username: string;
  password: string;
}

interface LoginFormProps {
  info: AuthProps;
  handleChange: (T: ChangeEvent<HTMLInputElement>) => void;
}

// need to change role to "admin" | "user"
interface RegistrationSubmit extends AuthProps {
  role: string;
}

export type { AuthProps, LoginFormProps, RegistrationSubmit };
