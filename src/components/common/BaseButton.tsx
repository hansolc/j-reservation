import React from "react";
import cls from "classnames";
/*
cls 사용이유
- isRadis ? "rounded-lg":"" => 이런 것들을 자동으로 없애줌
- trim()같은 메서드 없이 자동으로 문자열을 합쳐주지 때문에 가독성을 높일 수 있다.
*/

interface UserButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isRadius?: boolean;
  color: "primary" | "kakao";
  size: "sm" | "lg" | "full";
}

const btnSize = {
  sm: "max-w-[309px]",
  lg: "max-w-[340px]",
  full: "w-full",
};

const bgColorMap: Record<UserButtonProps["color"], string> = {
  primary: "bg-primary",
  kakao: "bg-kakao",
};

const textColorMap: Record<UserButtonProps["color"], string> = {
  primary: "text-white",
  kakao: "text-black",
};

const BaseButton = ({
  children,
  isRadius = false,
  color,
  size,
  className,
  ...props
}: UserButtonProps) => {
  const btnClassNames = cls(
    bgColorMap[color],
    textColorMap[color],
    btnSize[size],
    { "rounded-lg": isRadius },
    "h-[50px]",
    "text-lg",
    className
  );
  return (
    <button className={btnClassNames} {...props}>
      {children}
    </button>
  );
};

export default BaseButton;
