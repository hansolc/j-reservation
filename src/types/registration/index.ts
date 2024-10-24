import { ChangeEvent } from "react";

interface UserLoginInfoProps {
  email: string;
  password: string;
}

interface LoginFormProps {
  info: UserLoginInfoProps;
  handleChange: (T: ChangeEvent<HTMLInputElement>) => void;
}

export type { UserLoginInfoProps, LoginFormProps };
