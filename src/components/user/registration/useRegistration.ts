import { regis } from "@/api/service/auth";
import { ChangeEvent, useCallback, useState } from "react";
import { AuthProps, RegistrationSubmit } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { useRouter } from "next/navigation";

const useRegistration = () => {
  const router = useRouter();
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const initialUserInfo = (): AuthProps => ({
    username: "",
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

  const { mutate: registration } = useMutation({
    mutationFn: ({ username, password, role }: RegistrationSubmit) =>
      regis({ role: role, username, password }),
    onSuccess: ({ res, role }) => {
      console.log("success: ", res);
      // decode jwToken and redirect by role value
      if (role === "user") router.push("/login");
      else router.push("/admin");
    },
  });

  return {
    info,
    handleInputChange,
    registration,
    loading,
    error,
  };
};

export default useRegistration;
