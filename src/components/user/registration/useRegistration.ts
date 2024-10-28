import { registrationByUserInfo } from "@/api";
import handleApiCall from "@/utils/api";
import { ChangeEvent, useState } from "react";

interface CustomError {
  status: number;
  statusText: string;
  message: string;
}

interface UserLoginInfoProps {
  email: string;
  password: string;
}

const useRegistration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const initialUserInfo = (): UserLoginInfoProps => ({
    email: "",
    password: "",
  });

  const [info, setInfo] = useState<UserLoginInfoProps>(initialUserInfo);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: value,
    }));
  };

  const registration = async ({ email, password }: UserLoginInfoProps) => {
    try {
      const res = await handleApiCall(
        () => registrationByUserInfo({ email, password }),
        setLoading,
        setError
      );
      console.log("registration success: ", res);
    } catch (error) {
      // eslint-disable-next-line @typescript-eslint/no-explicit-any
      if ((error as any).message) {
        const { status, statusText, message } = error as CustomError;
        setError(`${status}: ${statusText} ${message}`);
      }
    }
  };

  const login = async ({}) => {
    console.log("login");
  };

  return { info, handleInputChange, registration, login, loading, error };
};

export default useRegistration;
