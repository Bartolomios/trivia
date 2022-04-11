import { Action } from '../actions';
import { ActionType } from "../action-types"

type QuestionsStates = {
  questions:object[]
}



const initialState : QuestionsStates = {

    questions: [
        {
        category: 'Entertainment: Video Games',
        type: 'boolean',
        difficulty: 'hard',
        question: 'Unturned originally started as a Roblox game.', 
        correct_answer: 'True',
        ncorrect_answers:'False',                
       }                       
    ]
};

const questionsReducer = (state: object =  initialState, action: Action) =>{
    switch(action.type){
        case ActionType.FETCH:
            return [state , action.payload];
        case ActionType.RESET:
            return 0
        default:
            return state
    }
};

export default questionsReducer;

