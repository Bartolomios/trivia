import { Action } from '../actions';
import { ActionType } from "../action-types"


interface Results  {
    question_title : string,
    question_answer: boolean
}
export interface IQuestionsStates  {
  questions : [],
  results : Results[],
  amount : number | null,
  difficulty : string
  status: ""
}

const initialState : IQuestionsStates = {

    questions: [],
    results: [],
    amount: null,
    difficulty: '',
    status:''

};

const questionsReducer = (state: IQuestionsStates =  initialState, action: Action) =>{

    switch(action.type){

        case ActionType.FETCH:
            return {
                ...state,                
                questions : action.payload,
                results:[]
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

