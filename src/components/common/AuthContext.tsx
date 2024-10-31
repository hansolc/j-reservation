"use client";

import { loginUser } from "@/api/service/auth";
import { AuthProps } from "@/types/auth";
import { useMutation } from "@tanstack/react-query";
import { createContext, useContext, useEffect, useState } from "react";
import { useRouter } from "next/navigation";

const AuthContext = createContext<{
  isAuthenticated: boolean;
  userLogin: (auth: AuthProps) => void;
  logout: () => void;
  userId: number | null;
}>({
  isAuthenticated: false,
  userLogin: () => {},
  logout: () => {},
  userId: null,
});

export const AuthProvider = ({ children }: { children: React.ReactNode }) => {
  const [isAuthenticated, setIsAuthenticated] = useState(false);
  const [userId, setUserId] = useState<number | null>(null);
  const router = useRouter();

  useEffect(() => {
    const token = localStorage.getItem("jwToken");
    if (token && !isAuthenticated) {
      setIsAuthenticated(true);
    }
  }, []);

  const { mutate: userLogin } = useMutation({
    mutationFn: ({ email, password }: AuthProps) =>
      loginUser({ email, password }),
    onSuccess: (id) => {
      setUserId(id);

      router.replace("/");
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
