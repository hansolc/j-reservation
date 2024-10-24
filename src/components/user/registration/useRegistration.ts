import { ChangeEvent, useState } from "react";

interface UserLoginInfoProps {
  email: string;
  password: string;
}

const useRegistration = () => {
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
    console.log("regis!: ", email, password);
  };

  const login = async ({}) => {
    console.log("login");
  };

  return { info, handleInputChange, registration, login };
};

export default useRegistration;
