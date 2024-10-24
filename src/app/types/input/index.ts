import { ChangeEvent, HTMLInputTypeAttribute } from "react";

interface InputOutlinedBottomProps
  extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: HTMLInputTypeAttribute;
  placeholder?: string;
  className?: string;
  handleInputChange: (e: ChangeEvent<HTMLInputElement>) => void;
  name: string;
}

export type { InputOutlinedBottomProps };
