import { ErrorCode } from "@/constant";
import { AxiosError } from "axios";

const isPredictableError = (code: string) => {
  const errorKeys = Object.keys(ErrorCode);
  return errorKeys.indexOf(code);
};

const isCustomError = (errorData: AxiosError) => {
  if (errorData.response && errorData.response.data) {
    const { data } = errorData.response;
    return (
      typeof data === "object" &&
      data !== null &&
      "errorId" in data &&
      "errorMessage" in data
    );
  }
  return false;
};

export { isPredictableError, isCustomError };
