import React from "react";
import cls from "classnames";

interface SectionProps {
  children: React.ReactNode;
}

interface SectionTextProps {
  children: React.ReactNode;
  bold?: boolean;
  fontSize?: number;
  outlined?: boolean;
  className?: string;
}

const Section = ({ children, ...rest }: SectionProps) => {
  return <section {...rest}>{children}</section>;
};

const SectionText = ({
  children,
  bold,
  fontSize = 16,
  outlined,
  className,
  ...rest
}: SectionTextProps) => {
  const sectionTextClassNames = cls(
    { "font-bold": bold },
    { "text-[#757880]": outlined },
    className
  );
  return (
    <span
      className={sectionTextClassNames}
      {...rest}
      style={{
        fontSize: `${fontSize / 16}rem`,
      }}
    >
      {children}
    </span>
  );
};

SectionText.displayName = "Section.Text";
Section.Text = SectionText;

export default Section;
