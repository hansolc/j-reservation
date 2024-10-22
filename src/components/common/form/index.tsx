import React, { ReactNode } from "react";
import cls from "classnames";

interface FormProps extends React.FormHTMLAttributes<HTMLFormElement> {
  children: ReactNode;
}

interface FormHeaderProps {
  children: ReactNode;
}

interface FormFieldContainerProps {
  children: ReactNode;
  multiple?: boolean;
}

interface FormInputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  label: string;
  type: "link" | "adults" | "kids";
  placeholder?: string;
  className?: string;
  seperate?: boolean;
}

// ***research
type FormComponentType = React.FunctionComponent<FormProps> & {
  Header: React.FunctionComponent<FormHeaderProps>;
  Input: React.FunctionComponent<FormInputProps>;
  FieldContainer: React.FunctionComponent<FormFieldContainerProps>;
};

const Form: FormComponentType = ({ children }: FormProps) => {
  return (
    <form
      action=""
      className="border rounded-lg px-3 py-7 shadow-md shadow-[#00000040]"
    >
      {children}
    </form>
  );
};

const FormHeader = ({ children }: FormHeaderProps) => {
  return <div className="flex justify-between">{children}</div>;
};

const FormInput = ({
  label,
  type,
  placeholder,
  seperate,
  ...rest
}: FormInputProps) => {
  return (
    <div
      className={cls({
        "border-r mr-[15px]": seperate,
      })}
    >
      <p className="text-[10px] font-bold">{label}</p>
      <input
        className={cls("w-full", {
          "border-b border-[#DDDDDD]": type === "link",
        })}
        type={type}
        placeholder={placeholder}
        {...rest}
      />
    </div>
  );
};

const FormFieldContainer = ({
  children,
  multiple = false,
}: FormFieldContainerProps) => {
  return (
    <div
      className={cls(
        "border border-[#717171] rounded-2xl h-14 px-3 py-2 my-2",
        {
          "flex ": multiple,
        }
      )}
    >
      {children}
    </div>
  );
};

Form.Header = FormHeader;
Form.Input = FormInput;
Form.FieldContainer = FormFieldContainer;

export default Form;
