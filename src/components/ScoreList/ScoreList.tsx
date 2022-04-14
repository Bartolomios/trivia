import ScoreItem from "../ScoreItem/ScoreItem";
import styles from "./ScoreList.module.scss";

type Props = {
  results: Object[];
};

const ScoreList = ({ results }: Props) => {
  return (
    <div className={styles.list}>
      {results.map((result: any) => {
        return (
          <ScoreItem
            key={result.question_title}
            questionTitle={result.question_title}
            questionAnswer={result.question_answer}
          />
        );
      })}
    </div>
  );
};

export default ScoreList;
