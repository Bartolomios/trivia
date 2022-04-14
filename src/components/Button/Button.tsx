import styles from "./Button.module.scss";
import cx from "classnames";

type Props = {
  children?: string;
  callback?: any;
  variant: string;
  boolean?: boolean;
};

const Button = ({ children, callback, variant, boolean }: Props) => {
  const classList = cx(styles.button, {
    [styles.buttonOrange]: variant === "Orange",
    [styles.buttonPurple]: variant === "Purple",
    [styles.buttonWhite]: variant === "White",
  });

  return (
    <button onClick={callback} className={classList}>
      {children}
    </button>
  );
};

export default Button;
