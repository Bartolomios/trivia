import { ActionType } from "../action-types"

export const setQuestions = (questions : []) => {

    return {
        type: ActionType.FETCH,
        payload:questions    
    }
} 

export const setAmount = (amount : number) => {

    return {
        type: ActionType.AMOUNT,
        payload:amount   
    }
} 

export const setDifficulty = (difficulty : string) => {

    return {
        type: ActionType.DIFFICULTY,
        payload:difficulty  
    }
} 

export const setResults = (results : Object) =>{

        return {
        type: ActionType.RESULTS,
        payload:results 
        }
    
}

export const setReset = () =>{
    return{
        type: ActionType.RESET
    }
}

export const setStatus = (status : string) =>{
    return{
        type:ActionType.STATUS,
        payload: status
    }
}