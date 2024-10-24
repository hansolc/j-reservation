export interface UserButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children: React.ReactNode;
  isRadius?: boolean;
  color: "primary" | "kakao";
  size: "sm" | "lg" | "full";
}
