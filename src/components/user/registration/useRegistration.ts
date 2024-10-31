import { registrationByUserInfo } from "@/api/auth";
import { CustomError } from "@/types/error";
import { handleApiCall } from "@/utils/api";
import { ChangeEvent, useCallback, useState } from "react";
// import { login as loginApi } from "@/api/auth";
import { AuthProps } from "@/types/auth";

const useRegistration = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const initialUserInfo = (): AuthProps => ({
    email: "",
    password: "",
  });

  const [info, setInfo] = useState<AuthProps>(initialUserInfo);

  // 이 로직은 부모 컴포넌트인 useRegistrationMaanger로 전달 후 다시 자식 컴포넌트에게
  // 전달될 가능성이 높다. 따라서 최적화가 필요하다.
  // e의 경우 매개변수로 항상 최신화된 값을 받는다. 따라서 deps에 넣을 필요가 없다.
  const handleInputChange = useCallback((e: ChangeEvent<HTMLInputElement>) => {
    const { value } = e.target;
    setInfo((prevInfo) => ({
      ...prevInfo,
      [e.target.name]: value,
    }));
  }, []);

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

  return {
    info,
    handleInputChange,
    registration,
    loading,
    error,
  };
};

export default useRegistration;
