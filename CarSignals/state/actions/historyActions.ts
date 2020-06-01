import { actionTypes } from "../types"
import { IPrediction } from "../reducers/predictionReducer"

export type GetHistory = {
    type: string,
    payload: any
}

export type GetHistorySuccess = {
    type: string,
    payload: any
}

export type GetHistoryFailed = {
    type: string,
    payload: any
}

export type DeleteDetectedSignal = {
    type: string,
    payload: any
}

export type DeleteDetectedSignalSuccess = {
    type: string,
    payload: any
}

export type DeleteDetectedSignalFailed = {
    type: string,
    payload: any
}

export type HistoryActions = GetHistory
                            | GetHistorySuccess
                            | GetHistoryFailed
                            | DeleteDetectedSignal
                            | DeleteDetectedSignalSuccess
                            | DeleteDetectedSignalFailed

export const getHistory = (uid: string) => {
    return {
        type: actionTypes.GET_HISTORY,
        payload: {
            uid
        }
    }
}

export const getHistorySuccess = (history: any) => {
    return {
        type: actionTypes.GET_HISTORY_SUCCESS,
        payload: {
            history
        }
    }
}

export const getHistoryFailed = (error: any) => {
    return {
        type: actionTypes.GET_HISTORY_FAILED,
        payload: {
            error,
        }
    }
}

export const deleteDetectedSignal = (id: string) => {
    return {
        type: actionTypes.DELETE_DETECTED_SIGNAL,
        payload: {
            id
        }
    }
}

export const addPredictionsToHistory = (predictions: IPrediction[]) => {
    return {
        type: actionTypes.ADD_PREDICTIONS_TO_HISTORY,
        payload: {
            predictions
        }
    }
}

