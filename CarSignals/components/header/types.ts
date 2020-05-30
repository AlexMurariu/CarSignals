import { UserState } from "../../state/reducers/authReducer";

export interface HeaderDataSet {
    user: UserState,
}

export interface HeaderDispatch {
    logout: Function,
    clearPredictions: Function
}

export type HeaderProps = HeaderDataSet & HeaderDispatch;