import Button from "../user/button";

const SubmitButton = ({
  handleClick,
  children,
}: {
  handleClick: () => void;
  children: React.ReactNode;
}) => {
  return (
    <Button color="primary" size="lg" className="mt-20" onClick={handleClick}>
      {children}
    </Button>
  );
};

export default SubmitButton;
