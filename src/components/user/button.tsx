"use client";

import React from "react";
import BaseButton from "../common/BaseButton";

import { UserButtonProps } from "@/app/types/button";

const Button = ({ children, ...rest }: UserButtonProps) => {
  const handleClick = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
    console.log(e.target);
  };
  return (
    <BaseButton onClick={(e) => handleClick(e)} {...rest}>
      {children}
    </BaseButton>
  );
};

export default Button;
