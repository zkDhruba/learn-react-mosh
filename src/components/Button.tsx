import { Children, ReactNode } from "react";

interface Props {
  text: string;
  color?: "primary" | "secondary" | "warning" | "danger" | "success";
  onClickButton: () => void;
}

const Button = ({ text, color = "primary", onClickButton }: Props) => {
  return (
    <button className={"btn btn-" + color} onClick={onClickButton}>
      {text}
    </button>
  );
};

export default Button;
