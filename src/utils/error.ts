import { ErrorCode } from "@/constant";

const isPredictableError = (code: string) => {
  const errorKeys = Object.keys(ErrorCode);
  return errorKeys.indexOf(code);
};

export { isPredictableError };
