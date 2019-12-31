import { UserState, authReducer } from "./authReducer";
import { Reducer, combineReducers } from "redux";

export type RootState = {
    auth: UserState
}

export const makeRootReducer = (): Reducer<RootState> => {
    return combineReducers({
        auth: authReducer
    })
}