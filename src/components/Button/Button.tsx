import styles from "./Button.module.scss";
import cx from "classnames";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  children?: string;
  variant: string;
};

const Button = ({ children, variant, ...other }: Props) => {
  const classList = cx(styles.button, {
    [styles.buttonOrange]: variant === "Orange",
    [styles.buttonPurple]: variant === "Purple",
    [styles.buttonWhite]: variant === "White",
  });

  return (
    <button className={classList} {...other}>
      {children}
    </button>
  );
};

export default Button;
