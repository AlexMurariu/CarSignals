import { UserState } from "../../state/reducers/authReducer";

export interface LoginUserDataState {
    user: UserState,
    loadUserInProgress: boolean
}

export interface LoginUserDispatch {
    login: Function
}

export type LoginUserProps = LoginUserDataState & LoginUserDispatch;