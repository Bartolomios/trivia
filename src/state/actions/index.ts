import { ActionType } from "../action-types"

interface FetchAction {
    type: ActionType.FETCH
    payload? : any[]
}

interface ResetAction {
    type: ActionType.RESET
    payload? : any[]
}

export type Action = FetchAction | ResetAction