import styles from "./ProgressBar.module.scss";
import { minTwoNumbers } from "../../helpers/minTwoNumbers";

type Props = {
  current: number;
  questionsAmount: number;
};

const ProgressBar = ({ current, questionsAmount }: Props) => {
  const currentQuestion = current + 1;
  const progress = (currentQuestion * 100) / questionsAmount;

  return (
    <div className={styles.progress}>
      <div className={styles.progressValue}>
        <span className={styles.progressCurrent}>
          {minTwoNumbers(currentQuestion)}
        </span>
        <span className={styles.separator}>/</span>
        <span className={styles.progressLimit}>{questionsAmount}</span>
      </div>
      <div className={styles.progressBar}>
        <div
          style={{ width: `${progress}%` }}
          className={styles.progressBarStatus}
        ></div>
      </div>
    </div>
  );
};

export default ProgressBar;
