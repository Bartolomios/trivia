import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "../../components/View/View";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Button from "../../components/Button/Button";
import ExitButton from "../../components/ExitButton/ExitButton";
import styles from "./QuizView.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state";
import { IQuestionsStates } from "../../state/reducers/questionsReducer";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";
import AnimatedPage from "../../components/AnimetedPage/AnimatedPage";

const QuizView = () => {
  const dispatch = useDispatch();
  const { setResults, setReset, setStatus } = bindActionCreators(
    actionCreators,
    dispatch
  );
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const state: IQuestionsStates = useSelector(
    (state: State) => state.questionsReducer
  );

  const { questions, status }: any = state;

  useEffect(() => {
    if (!questions.length && status === "IDLE") {
      navigate("/");
    }
  }, [questions, navigate]);

  const resetGame = () => {
    setReset();
    setStatus("IDLE");
    navigate("/");
  };

  const nextQuestion = (answer: string) => {
    const increment = current + 1;

    const correct_answer = questions[current].correct_answer;

    const score = correct_answer === answer;

    setResults({
      question_title: questions[current].question,
      question_answer: score,
    });

    if (increment === questions.length) {
      navigate("../score");
    }
    setCurrent(increment);
  };

  return (
    <AnimatedPage>
      <View>
        <img alt="decoration" className={styles.decorationTopLeft} />
        <img alt="decoration" className={styles.decorationBottomLeft} />
        <img alt="decoration" className={styles.decorationTopRight} />
        <img alt="decoration" className={styles.decorationBottomRight} />
        <img alt="decoration" className={styles.decorationMiddleRight} />
        {status === "SUCCES" ? (
          <div className={styles.container}>
            <QuestionCard
              current={current}
              questionsAmount={state.questions.length}
              questionObject={questions[current]}
            ></QuestionCard>
            <Button onClick={() => nextQuestion("True")} variant="Purple">
              True
            </Button>
            <Button onClick={() => nextQuestion("False")} variant="White">
              False
            </Button>
            <ExitButton onClick={() => resetGame()} variant="Purple" />
          </div>
        ) : (
          <div className={styles.loading}> Loading...</div>
        )}
      </View>
    </AnimatedPage>
  );
};

export default QuizView;
