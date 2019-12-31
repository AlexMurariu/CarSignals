import { UserState } from "../state/reducers/authReducer";

export interface UserDataState {
    user: UserState,
}

export interface UserDispatch {
    login: Function
    signUp: Function,
}

export type UserProps = UserDataState & UserDispatch;