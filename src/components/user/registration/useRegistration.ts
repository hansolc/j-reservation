import { registrationByUserInfo } from "@/api";
import handleApiCall from "@/utils";
import { ChangeEvent, useState } from "react";

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
      console.error("registration failed: ", error);
    }
  };

  const login = async ({}) => {
    console.log("login");
  };

  return { info, handleInputChange, registration, login, loading, error };
};

export default useRegistration;
