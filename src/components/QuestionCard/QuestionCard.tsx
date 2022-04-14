import ProgressBar from "../ProgressBar/ProgressBar";
import styles from "./QuestionCard.module.scss";
import { decodeStrings } from "../../helpers/decodeStrings";

type Props = {
  questionObject: any;
  current: number;
  questionsAmount: number;
};

const QuestionCard = ({ questionObject, current, questionsAmount }: Props) => {
  const { category, difficulty, question } = questionObject;
  return (
    <>
      <div className={styles.categoryName}>{category}</div>
      <div className={styles.level}>Level: {difficulty}</div>
      <ProgressBar current={current} questionsAmount={questionsAmount} />
      <div className={styles.questionTitle}>{decodeStrings(question)}</div>
    </>
  );
};

export default QuestionCard;
