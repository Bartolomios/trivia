import { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useSelector } from "react-redux";
import { State } from "../../state";
import { IQuestionsStates } from "../../state/reducers/questionsReducer";
import ScoreList from "../../components/ScoreList/ScoreList";
import View from "../../components/View/View";
import styles from "./ScoreView.module.scss";
import Button from "../../components/Button/Button";
import ScoreHeader from "../../components/ScoreHeader/ScoreHeader";
import { bindActionCreators } from "redux";
import { useDispatch } from "react-redux";
import { actionCreators } from "../../state";
import ExitButton from "../../components/ExitButton/ExitButton";
import { fetchQuestions } from "../../api/Api";

const ScoreView = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const { setReset, setQuestions } = bindActionCreators(
    actionCreators,
    dispatch
  );

  const state: IQuestionsStates = useSelector(
    (state: State) => state.questionsReducer
  );

  const { results, amount, difficulty }: any = state;

  useEffect(() => {
    if (!results.length) {
      navigate("/");
    }
  }, [results, navigate]);

  const correctResults = results.filter((item: any) => {
    return item.question_answer === true;
  });

  const resetGame = () => {
    setReset();
    navigate("/");
  };

  const restartGame = () => {
    navigate("../quiz");
    fetchQuestions(amount, difficulty.toLowerCase(), setQuestions);
  };

  return (
    <View isPurple={true}>
      <img alt="decoration" className={styles.decorationTopLeft} />
      <img alt="decoration" className={styles.decorationBottomLeft} />
      <img alt="decoration" className={styles.decorationTopRight} />
      <img alt="decoration" className={styles.decorationBottomRight} />
      <div className={styles.container}>
        <ScoreHeader score={correctResults.length} total={results.length} />
        <ScoreList results={results} />
        <Button variant="Orange" onClick={restartGame}>
          Play Agin
        </Button>
        <ExitButton onClick={() => resetGame()} variant="White" />
      </div>
    </View>
  );
};

export default ScoreView;
