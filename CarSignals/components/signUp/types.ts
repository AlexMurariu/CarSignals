import { UserState } from "../../state/reducers/authReducer";

export interface SignUpUserDataState {
    user: UserState,
    loadUserInProgress: boolean
}

export interface SignUpUserDispatch {
    signUp: Function
}

export type SignUpUserProps = SignUpUserDataState & SignUpUserDispatch;