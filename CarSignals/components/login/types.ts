import { UserState } from "../../state/reducers/authReducer";

export interface UserDataState {
    user: UserState,
}

export interface UserDispatch {
    login: Function
}

export type UserProps = UserDataState & UserDispatch;