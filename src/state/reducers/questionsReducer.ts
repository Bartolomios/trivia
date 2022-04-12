import { Action } from '../actions';
import { ActionType } from "../action-types"

type QuestionsStates = {
  questions : object[],
  completeQuestions : object[],
  amount : number | null,
  difficulty : string
}

const initialState : QuestionsStates = {

    questions: [],
    completeQuestions: [],
    amount: null,
    difficulty: ''

};

const questionsReducer = (state: object =  initialState, action: Action) =>{

    switch(action.type){

        case ActionType.FETCH:
            return {
                ...state,
                questions : action.payload
            }

        case ActionType.RESET:
            return initialState 

        case ActionType.AMOUNT:
            return {
                ...state,
                amount : action.payload
            }

        default:
            return state
    }
};

export default questionsReducer;

