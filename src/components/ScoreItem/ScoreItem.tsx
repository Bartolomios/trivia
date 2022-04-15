import styles from "./ScoreItem.module.scss";
import correctIcon from "../../assets/icons/icon-correct.svg";
import incorrectIcon from "../../assets/icons/icon-incorrect.svg";
import { decodeStrings } from "../../helpers/decodeStrings";

type Props = {
  questionTitle: string;
  questionAnswer: boolean;
};

const ScoreItem = ({ questionTitle, questionAnswer }: Props) => {
  return (
    <>
      <div className={styles.header}></div>
      {questionAnswer ? (
        <div className={styles.answerCorrect}>
          <div className={styles.text}>{decodeStrings(questionTitle)}</div>
          <img src={correctIcon} alt="incoreect icon" className={styles.icon} />
        </div>
      ) : (
        <div className={styles.answerIncorrect}>
          <div className={styles.text}>{decodeStrings(questionTitle)}</div>
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
