import { UserState } from "../../state/reducers/authReducer";

export interface LoginUserDataState {
    user: UserState,
}

export interface LoginUserDispatch {
    login: Function
}

export type LoginUserProps = LoginUserDataState & LoginUserDispatch;