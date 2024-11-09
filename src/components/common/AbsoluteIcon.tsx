import React from "react";
import cls from "classnames";

type AbsolutePosition =
  | "top-right"
  | "top-left"
  | "bottom-right"
  | "bottom-left";

interface AbsoluteIconPropsBase extends React.HTMLAttributes<HTMLDivElement> {
  Icon: React.ReactNode;
  className?: string;
  onClick?: (e: React.MouseEvent<HTMLDivElement>) => void;
}

interface AbsoluteIconPropsPosition extends AbsoluteIconPropsBase {
  position: AbsolutePosition;
}

interface AbsoluteIconPropsCustomClassName extends AbsoluteIconPropsBase {
  customClassName: string;
}

type AbsoluteIconProps =
  | AbsoluteIconPropsPosition
  | AbsoluteIconPropsCustomClassName;

const POSITION_MAPPED: Record<AbsolutePosition, string> = {
  "top-right": "top-0 right-0",
  "top-left": "top-0 left-0",
  "bottom-right": "bottom-0 right-0",
  "bottom-left": "bottom-0 left-0",
};

const AbsoluteIcon = ({
  Icon,
  className,
  onClick,
  ...props
}: AbsoluteIconProps) => {
  let absIconClassNames = `absolute ${className}`;

  if ("position" in props) {
    absIconClassNames = cls(absIconClassNames, POSITION_MAPPED[props.position]);
  } else if ("customClassName" in props) {
    absIconClassNames = cls(absIconClassNames, props.customClassName);
  }
  return (
    <div className={cls("relative")}>
      <div className={absIconClassNames} onClick={onClick}>
        {Icon}
      </div>
    </div>
  );
};

export default AbsoluteIcon;
