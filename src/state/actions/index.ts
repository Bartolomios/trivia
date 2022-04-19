import { ActionType } from "../action-types"

interface IFetchAction {
    type: ActionType.FETCH
    payload? : any[]
}

interface IResetAction {
    type: ActionType.RESET
    payload? : any
}

interface IAmountAction {
    type: ActionType.AMOUNT
    payload? : number
}

interface IDifficultyAction {
    type: ActionType.DIFFICULTY
    payload? : string
}

interface IResultsAction{
    type: ActionType.RESULTS
    payload?: Object
}

interface IStatusAction{
    type:ActionType.STATUS
    payload: 'IDLE' | 'PENDING' | 'SUCCES' | 'FAILED'
}



export type Action = IFetchAction | IResetAction | IAmountAction | IDifficultyAction | IResultsAction | IStatusAction