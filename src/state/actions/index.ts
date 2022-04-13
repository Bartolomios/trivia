import { ActionType } from "../action-types"

interface FetchAction {
    type: ActionType.FETCH
    payload? : any[]
}

interface ResetAction {
    type: ActionType.RESET
    payload? : any[]
}

interface AmountAction {
    type: ActionType.AMOUNT
    payload? : number
}

interface DifficultyAction {
    type: ActionType.DIFFICULTY
    payload? : string
}

interface ResultsActions{
    type: ActionType.RESULTS
    payload?: Object
}


export type Action = FetchAction | ResetAction | AmountAction | DifficultyAction | ResultsActions