import styles from "./Input.module.scss";
import { ButtonHTMLAttributes } from "react";
import { ChangeEventHandler } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  handleChange: ChangeEventHandler;
};

const Input = ({ handleChange }: Props) => {
  return (
    <input
      type="text"
      onChange={handleChange}
      className={styles.input}
      pattern="^(?:[1-9]|[1-4][0-9]|50)$"
      required={true}
      inputMode="numeric"
      placeholder="Type number from 1 to 50"
    />
  );
};

export default Input;
