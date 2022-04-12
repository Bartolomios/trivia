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