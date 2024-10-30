"use client";

import React, { useEffect } from "react";
import { useError } from "./ErrorContext";
import toast from "react-hot-toast";

const ErrorToast = () => {
  const { error } = useError();
  useEffect(() => {
    if (error) {
      toast.error(error);
    }
  }, [error]);

  return <></>;
};

export default ErrorToast;
