import { InputOutlinedBottomProps } from "@/app/types/input";

const InputOutlinedBottom = ({
  label,
  type,
  placeholder,
  className,
  ...rest
}: InputOutlinedBottomProps) => {
  return (
    <div className="flex flex-col">
      <label className="text-sm text-[#787878]">{label}</label>
      <input
        type={type}
        placeholder={placeholder}
        className={`border-b-[1px] border-b-[#DDDDDD] pt-2 ${className}`}
        {...rest}
      />
    </div>
  );
};

export default InputOutlinedBottom;
