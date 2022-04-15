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

interface IResultsActions{
    type: ActionType.RESULTS
    payload?: Object
}



export type Action = IFetchAction | IResetAction | IAmountAction | IDifficultyAction | IResultsActions