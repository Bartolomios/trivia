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

export type Action = FetchAction | ResetAction | AmountAction