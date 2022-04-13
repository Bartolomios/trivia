import { Action } from '../actions';
import { ActionType } from "../action-types"


interface Results  {
    question_title : string,
    question_answer: boolean
}
export interface QuestionsStates  {
  questions : [],
  results : Results[],
  amount : number | null,
  difficulty : string
}

const initialState : QuestionsStates = {

    questions: [],
    results: [],
    amount: null,
    difficulty: ''

};

const questionsReducer = (state: QuestionsStates =  initialState, action: Action) =>{

    switch(action.type){

        case ActionType.FETCH:
            return {
                ...state,
                questions : action.payload
            }

        case ActionType.AMOUNT:
            return {
                ...state,
                amount : action.payload
            }

        case ActionType.DIFFICULTY:
            return {
                ...state,
                difficulty : action.payload
            }
        
        case ActionType.RESULTS:
            console.log("test");
            
            return{
                ...state,
                results:[
                    ...state.results, action.payload
                ]
      
            }    

        case ActionType.RESET:
            return initialState 

 
        default:
            return state
    }
};

export default questionsReducer;

