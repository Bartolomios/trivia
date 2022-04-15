import styles from "./ExitButton.module.scss";
import cx from "classnames";
import { ButtonHTMLAttributes } from "react";

type Props = ButtonHTMLAttributes<HTMLButtonElement> & {
  variant: string;
};

const ExitButton = ({ variant, ...other }: Props) => {
  const classList = cx(styles.button, {
    [styles.buttonPurple]: variant === "Purple",
    [styles.buttonWhite]: variant === "White",
  });

  return (
    <button className={classList} {...other}>
      <svg viewBox="0 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
        <path
          d="M5.23604 24.0659L12.4893 16.8052L19.747 24.0659C22.5855 26.9055 26.9329 22.6326 24.0541 19.7526L16.8008 12.4963L24.0541 5.2356C26.888 2.40499 22.5765 -1.90832 19.747 0.926784L12.4893 8.18303L5.23604 0.926784C2.40211 -1.90832 -1.90493 2.40499 0.924509 5.2356L8.18226 12.4963L0.924509 19.7526C-1.90493 22.5877 2.40211 26.901 5.23604 24.0659Z"
          fill={variant}
        />
      </svg>
    </button>
  );
};

export default ExitButton;
