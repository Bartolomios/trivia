import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./QuestionCard.module.scss";

type Props = {
  question: any;
  current: number;
  questionsAmount: number;
};

const QuestionCard = ({ question, current, questionsAmount }: Props) => {
  return (
    <>
      <div className={styles.categoryName}>{question.category}</div>
      <div className={styles.level}>Level: {question.difficulty}</div>
      <ProgressBar current={current} questionsAmount={questionsAmount} />
      <div className={styles.questionTitle}>{question.question}</div>
    </>
  );
};

export default QuestionCard;
