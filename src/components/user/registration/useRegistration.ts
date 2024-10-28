import { registrationByUserInfo } from "@/api/auth";
import { CustomError } from "@/types/error";
import { handleApiCall } from "@/utils/api";
import { ChangeEvent, useState } from "react";
import { login as loginApi } from "@/api/auth";
import { AuthProps } from "@/types/auth";
import { API_URL } from "@/constant";

const useRegistration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const initialUserInfo = (): AuthProps => ({
    email: "",
    password: "",
  });

  const [info, setInfo] = useState<AuthProps>(initialUserInfo);

  const handleInputChange = (e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: value,
    }));
  };

  const registration = async ({ email, password }: AuthProps) => {
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

  // res headers값에 접근해야 되기 때문에 login의 경우 handleAPIcall을 사용하지 못함
  // 해결 방안 필요
  const login = async ({ email, password }: AuthProps) => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`${API_URL}/login`, {
        method: "POST",
        headers: {
          "Content-type": "application/json",
        },
        body: JSON.stringify({
          email: email,
          password: password,
        }),
      });
      if (res.ok) {
        const token = res.headers.get("Authorization");
        if (token) {
          localStorage.setItem("jwToken", token.split(" ")[1]);
        }
      } else {
        const errJson = await res.json();
        throw {
          status: res.status,
          statusText: res.statusText,
          message: errJson || "unkonwn error",
        } as CustomError;
      }
    } catch (error) {
      if (error instanceof Error) {
        console.error(error);
        setError("network error");
        // eslint-disable-next-line @typescript-eslint/no-explicit-any
      } else if (
        typeof error === "object" &&
        error !== null &&
        "statusText" in error &&
        "message" in error &&
        "status" in error
      ) {
        setError(`${error.status}: ${error.message}`);
      } else {
        console.error(error);
      }
    } finally {
      setLoading(false);
    }
  };

  return { info, handleInputChange, registration, login, loading, error };
};

export default useRegistration;
