import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../state";
import { QuestionsStates } from "../../state/reducers/questionsReducer";
import ScoreList from "../../components/ScoreList/ScoreList";
import View from "../../components/View/View";
import styles from "./ScoreView.module.scss";
import Button from "../../components/Button/Button";
import ScoreHeader from "../../components/ScoreHeader/ScoreHeader";

const ScoreView = () => {
  const restartGame = () => {};
  const navigate = useNavigate();

  const state: QuestionsStates = useSelector(
    (state: State) => state.questionsReducer
  );

  const { results }: any = state;

  useEffect(() => {
    if (!results.length) {
      navigate("/");
    }
  }, [results, navigate]);

  const correctResults = results.filter((item: any) => {
    return item.question_answer === true;
  });

  console.log(results);
  console.log(correctResults);

  return (
    <View isPurple={true}>
      <img alt="decoration" className={styles.decorationTopLeft} />
      <img alt="decoration" className={styles.decorationBottomLeft} />
      <img alt="decoration" className={styles.decorationTopRight} />
      <img alt="decoration" className={styles.decorationBottomRight} />
      <ScoreHeader score={correctResults.length} total={results.length} />
      <ScoreList results={results} />
      <Button variant="Orange" onClick={restartGame}>
        Play Agin
      </Button>
    </View>
  );
};

export default ScoreView;
