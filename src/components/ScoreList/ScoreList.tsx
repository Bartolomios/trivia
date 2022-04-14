import { QuestionsStates } from "../../state/reducers/questionsReducer";
import { useDispatch, useSelector } from "react-redux";
import { State } from "../../state";
import ScoreItem from "../ScoreItem/ScoreItem";

const ScoreList = () => {
  const state: QuestionsStates = useSelector(
    (state: State) => state.questionsReducer
  );

  const { results }: any = state;

  return (
    <div>
      {results.map((result: any) => {
        return (
          <ScoreItem
            questionTitle={result.question_title}
            questionAnswer={result.question_answer}
          />
        );
      })}
    </div>
  );
};

export default ScoreList;
