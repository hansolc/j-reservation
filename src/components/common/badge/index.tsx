import React from "react";
import cls from "classnames";
import { BackgroundColorKeys } from "@/types/styles";
import { BACKGROUND_COLOR_TEXT_MAPPING } from "@/constant";

interface BadgeProps {
  children: React.ReactNode;
  isRadius?: boolean;
  color?: BackgroundColorKeys;
  className?: string;
}

const Badge = ({
  children,
  isRadius,
  color = "primary",
  className,
}: BadgeProps) => {
  const badgeCls = cls(
    BACKGROUND_COLOR_TEXT_MAPPING[color],
    {
      "rounded-[15px]": isRadius,
    },
    "w-[125px]",
    "h-[30px]",
    "text-center",
    "text-[15px]",
    "content-center",
    className
  );
  return <div className={badgeCls}>{children}</div>;
};

export default Badge;
