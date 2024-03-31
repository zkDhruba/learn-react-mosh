import { Children, ReactNode } from "react";

interface Props {
  children: string;
  color?: "primary" | "secondary" | "warning" | "danger" | "success";
  onClickButton: () => void;
}

const Button = ({ children, color = "primary", onClickButton }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClickButton}>
      {children}
    </button>
  );
};

export default Button;
