"use client";

import React from "react";
import BaseButton from "../common/BaseButton";

import { UserButtonProps } from "@/types/button";

const Button = ({ children, className = "", ...rest }: UserButtonProps) => {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    // console.log("button clicked: ", e);
  };
  return (
    <BaseButton
      onClick={(e) => handleClick(e)}
      {...rest}
      className={`w-full ${className}`}
    >
      {children}
    </BaseButton>
  );
};

export default Button;
