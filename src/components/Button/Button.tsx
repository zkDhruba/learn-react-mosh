import { Children, ReactNode } from "react";
import styles from "./Button.module.css";

interface Props {
  text: string;
  // color?: "primary" | "secondary" | "warning" | "danger" | "success";
  onClickButton: () => void;
}

const Button = ({ text, onClickButton }: Props) => {
  return (
    <button className={styles.btn} onClick={onClickButton}>
      {text}
    </button>
  );
};

export default Button;
