import { UserState } from "../../state/reducers/authReducer";

export interface CarServiceState {
    user: UserState,
    loadUserInProgress: boolean
}

export interface CarServiceDispatch {
    
}

export type CarServiceProps = CarServiceState & CarServiceDispatch;