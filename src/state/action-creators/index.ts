import { ActionType } from "../action-types"

export const getQuestions = (questions : []) => {

    return {
        type: ActionType.FETCH,
        payload:questions    
    }
} 

export const getAmount = (amount : number) => {

    return {
        type: ActionType.AMOUNT,
        payload:amount   
    }
} 

export const getDifficulty = (difficulty : string) => {

    return {
        type: ActionType.DIFFICULTY,
        payload:difficulty  
    }
} 

export const getResults = (results : Object) =>{

        return {
        type: ActionType.RESULTS,
        payload:results 
        }
    
}