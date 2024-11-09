import Section from "../common/section";
import Goback from "./GoBack";

const SectionHeaderWithBack = ({ children }: { children: React.ReactNode }) => {
  return (
    <Section.Text className="flex items-center gap-3" bold fontSize={20}>
      <Goback />
      {children}
    </Section.Text>
  );
};

export default SectionHeaderWithBack;
