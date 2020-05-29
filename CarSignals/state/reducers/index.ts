import { UserState, authReducer } from "./authReducer";
import { Reducer, combineReducers } from "redux";
import { UiState, uiReducer } from "./uiReducer";
import { PermissionState, permissionReducer } from "./permissionReducer";

export type RootState = {
    auth: UserState,
    permissions: PermissionState,
    ui: UiState
}

export const makeRootReducer = (): Reducer<RootState> => {
    return combineReducers({
        auth: authReducer,
        permissions: permissionReducer,
        ui: uiReducer
    })
}