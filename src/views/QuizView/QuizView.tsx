import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import View from "../../components/View/View";
import QuestionCard from "../../components/QuestionCard/QuestionCard";
import Button from "../../components/Button/Button";
import styles from "./QuizView.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state";
import { QuestionsStates } from "../../state/reducers/questionsReducer";
import { bindActionCreators } from "redux";
import { actionCreators } from "../../state";

const QuizView = () => {
  const dispatch = useDispatch();
  const { getResults } = bindActionCreators(actionCreators, dispatch);
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const state: QuestionsStates = useSelector(
    (state: State) => state.questionsReducer
  );

  const { questions }: any = state;

  useEffect(() => {
    if (!questions.length) {
      navigate("/");
    }
  }, [questions, navigate]);

  const nextQuestion = (answer: string) => {
    const increment = current + 1;

    const correct_answer = questions[current].correct_answer;

    const score = correct_answer === answer;

    dispatch(
      getResults({
        question_title: questions[current].question,
        question_answer: score,
      })
    );

    if (increment === questions.length) {
      navigate("../score");
    }
    setCurrent(increment);
  };

  return (
    <View>
      <div className={styles.container}>
        <img alt="decoration" className={styles.decorationTopLeft} />
        <img alt="decoration" className={styles.decorationBottomLeft} />
        <img alt="decoration" className={styles.decorationTopRight} />
        <img alt="decoration" className={styles.decorationBottomRight} />
        {questions.length ? (
          <>
            <QuestionCard
              current={current}
              questionsAmount={state.questions.length}
              questionObject={questions[current]}
            ></QuestionCard>
            <Button callback={() => nextQuestion("True")} variant="Purple">
              True
            </Button>
            <Button callback={() => nextQuestion("False")} variant="White">
              False
            </Button>
          </>
        ) : (
          <div> Back to Start </div>
        )}
      </div>
    </View>
  );
};

export default QuizView;
