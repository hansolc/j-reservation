import React from "react";

interface SectionHeaderProps {
  text: Array<string>;
  className?: string;
}

const SectionHeader = ({ text, className }: SectionHeaderProps) => {
  return (
    <header className={`text-2xl font-bold px-5 ${className}`}>
      {text.map((line, index) => {
        return (
          <React.Fragment key={index}>
            {line}
            {index < text.length - 1 && <br />}
          </React.Fragment>
        );
      })}
    </header>
  );
};

export default SectionHeader;
