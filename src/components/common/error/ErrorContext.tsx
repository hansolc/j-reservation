"use client";

import axios from "axios";
import { createContext, useContext, useState } from "react";

type APIErrorResponse = {
  data: string;
};

type APICustomErrorResponse = {
  errorId: number | string;
  errorMessage: string;
};

interface ErrorContextProps {
  error: string | null;
  updateError: (error: Error) => void;
}

const ErrorContext = createContext<ErrorContextProps>({
  error: "",
  updateError: () => {},
});

export const ErrorProvider = ({ children }: { children: React.ReactNode }) => {
  const [error, setError] = useState<string | null>(null);

  const updateError = (error: Error) => {
    if (axios.isAxiosError<APIErrorResponse>(error) && error.response) {
      const { data } = error.response.data;
      // 같은 오류 메세지 일 경우 ErrorToast의 useEffect가 제대로 실행되지 않아 hacky way 방법 사용
      setError(null);
      setTimeout(() => {
        setError(data);
      }, 50);
    } else if (
      axios.isAxiosError<APICustomErrorResponse>(error) &&
      error.response
    ) {
      const { errorId, errorMessage } = error.response.data;
      setError(null);
      setTimeout(() => {
        setError(`${errorId}: ${errorMessage}`);
      }, 50);
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
