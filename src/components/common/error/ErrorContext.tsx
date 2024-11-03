"use client";

import { APICustomErrorResponse, ErrorContextProps } from "@/types/error";
import { isCustomError } from "@/utils/error";
import axios from "axios";
import { createContext, useContext, useState } from "react";

const ErrorContext = createContext<ErrorContextProps>({
  error: "",
  updateError: () => {},
});

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<string | null>(null);

  const updateError = (error: Error) => {
    if (axios.isAxiosError<APICustomErrorResponse>(error) && error.response) {
      setError(null);
      if (isCustomError(error)) {
        const { errorId, errorMessage } = error.response.data;
        setTimeout(() => {
          setError(`${errorId}: ${errorMessage}`);
        }, 50);
      } else {
        setTimeout(() => {
          setError(error.message);
        }, 50);
      }
    } else {
      setError(null);
      setTimeout(() => {
        setError(error.message);
      }, 50);
    }
  };

  return (
    <ErrorContext.Provider value={{ error, updateError }}>
      {children}
    </ErrorContext.Provider>
  );
};

export const useError = (): ErrorContextProps => {
  const context = useContext(ErrorContext);
  if (!context) {
    throw new Error("useError must be used within an ErrorProvider");
  }
  return context;
};
