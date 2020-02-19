import { UserState, authReducer } from "./authReducer";
import { Reducer, combineReducers } from "redux";
import { UiState, uiReducer } from "./uiReducer";

export type RootState = {
    auth: UserState,
    ui: UiState
}

export const makeRootReducer = (): Reducer<RootState> => {
    return combineReducers({
        auth: authReducer,
        ui: uiReducer
    })
}