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

  const nextQuestion = () => {
    const increment = current + 1;

    dispatch(getResults({ question_title: "Test", question_answer: true }));

    if (increment === state.questions.length) {
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
        <QuestionCard
          current={current}
          questionsAmount={state.questions.length}
          question={questions[current]}
        ></QuestionCard>
        <Button callback={nextQuestion} variant="Purple" boolean={true}>
          True
        </Button>
        <Button callback={nextQuestion} variant="White" boolean={false}>
          False
        </Button>
      </div>
    </View>
  );
};

export default QuizView;
