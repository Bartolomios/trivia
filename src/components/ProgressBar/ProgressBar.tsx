import styles from "./ProgressBar.module.scss";

type Props = {
  current: number;
  questionsAmount: number;
};

const ProgressBar = ({ current, questionsAmount }: Props) => {
  const currentQuestion = current + 1;

  return (
    <div className={styles.progress}>
      <div className={styles.progressValue}>
        <span className={styles.progressCurrent}>{currentQuestion}</span>
        <span className={styles.separator}>/</span>
        <span className={styles.progressLimit}>{questionsAmount}</span>
      </div>
      <div className={styles.progressBar}></div>
    </div>
  );
};

export default ProgressBar;
