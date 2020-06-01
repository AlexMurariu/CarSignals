import { UserState, authReducer } from "./authReducer";
import { Reducer, combineReducers } from "redux";
import { UiState, uiReducer } from "./uiReducer";
import { PermissionState, permissionReducer } from "./permissionReducer";
import { predictionReducer, PredictionListState } from "./predictionReducer";
import { HistoryState, historyReducer } from "./historyReducer";

export type RootState = {
    auth: UserState,
    history: HistoryState,
    permissions: PermissionState,
    predictions: PredictionListState,
    ui: UiState
}

export const makeRootReducer = (): Reducer<RootState> => {
    return combineReducers({
        auth: authReducer,
        history: historyReducer,
        permissions: permissionReducer,
        predictions: predictionReducer,
        ui: uiReducer
    })
}