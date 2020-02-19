import { UserState } from "../../state/reducers/authReducer";

export interface HistoryState {
    user: UserState,
    loadUserInProgress: boolean
}

export interface HistoryDispatch {
    
}

export type HistoryProps = HistoryState & HistoryDispatch;