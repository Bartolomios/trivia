import styles from "./ScoreItem.module.scss";
import correctIcon from "../../assets/icons/icon-correct.svg";
import incorrectIcon from "../../assets/icons/icon-incorrect.svg";

type Props = {
  questionTitle: string;
  questionAnswer: boolean;
};

const ScoreItem = ({ questionTitle, questionAnswer }: Props) => {
  return (
    <>
      {questionAnswer ? (
        <div className={styles.answerCorrect}>
          <div className={styles.text}>{questionTitle}</div>
          <img src={correctIcon} alt="incoreect icon" className={styles.icon} />
        </div>
      ) : (
        <div className={styles.answerIncorrect}>
          <div className={styles.text}>{questionTitle}</div>
          <img
            src={incorrectIcon}
            alt="incoreect icon"
            className={styles.icon}
          />
        </div>
      )}
    </>
  );
};

export default ScoreItem;
