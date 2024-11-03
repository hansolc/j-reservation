"use client";

import { loginUser } from "@/api/service/auth";
import { AuthProps } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { AxiosHeaders } from "axios";
import { jwtDecode } from "jwt-decode";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  userLogin: (auth: AuthProps) => void;
  logout: () => void;
  userId: number;
}>({
  isAuthenticated: false,
  userLogin: () => {},
  logout: () => {},
  userId: 0,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<number>(0);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwToken");
    // const token = cookies().get("jwToken");
    if (token && !isAuthenticated) {
      const { userId }: { userId: number } = jwtDecode(token);
      setIsAuthenticated(true);
      setUserId(userId);
    }
  }, [isAuthenticated]);

  const { mutate: userLogin } = useMutation({
    mutationFn: ({ username, password }: AuthProps) =>
      loginUser({ username, password }),
    onSuccess: (res) => {
      const headers = res.headers;
      if (headers instanceof AxiosHeaders && headers.has("authorization")) {
        localStorage.setItem("jwToken", headers["authorization"]);
        const { userId }: { userId: number } = jwtDecode(
          headers["authorization"]
        );
        console.log(userId);
        setUserId(userId);
        setIsAuthenticated(true);
        router.push("/");
      } else {
        console.log("something wrong");
      }
    },
  });

  const logout = () => {
    setIsAuthenticated(false);
  };

  return (
    <AuthContext.Provider
      value={{ isAuthenticated, userLogin, logout, userId }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => useContext(AuthContext);
