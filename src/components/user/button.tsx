"use client";

import React from "react";
import BaseButton from "../common/BaseButton";

import { UserButtonProps } from "@/types/button";

const Button = ({ children, className = "", ...rest }: UserButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
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
