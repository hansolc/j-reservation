import React from "react";
import cls from "classnames";

interface SectionProps {
  children: React.ReactNode;
  className?: string;
}

interface SectionTextProps {
  children: React.ReactNode;
  bold?: boolean;
  fontSize?: number;
  outlined?: boolean;
  className?: string;
}

type SectionCompoentType = React.FunctionComponent<SectionProps> & {
  Text: React.FunctionComponent<SectionTextProps>;
};

const Section: SectionCompoentType = ({
  children,
  className = "",
  ...rest
}: SectionProps) => {
  return (
    <section className={`global-section ${className}`} {...rest}>
      {children}
    </section>
  );
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

Section.Text = SectionText;

export default Section;
