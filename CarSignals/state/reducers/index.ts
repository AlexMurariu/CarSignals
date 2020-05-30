import { UserState, authReducer } from "./authReducer";
import { Reducer, combineReducers } from "redux";
import { UiState, uiReducer } from "./uiReducer";
import { PermissionState, permissionReducer } from "./permissionReducer";
import { predictionReducer, PredictionListState } from "./predictionReducer";

export type RootState = {
    auth: UserState,
    permissions: PermissionState,
    predictions: PredictionListState,
    ui: UiState
}

export const makeRootReducer = (): Reducer<RootState> => {
    return combineReducers({
        auth: authReducer,
        permissions: permissionReducer,
        predictions: predictionReducer,
        ui: uiReducer
    })
}