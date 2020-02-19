import { actionTypes } from "../types"

export type GetDetectedSignals = {
    type: string,
    payload: any
}

export type GetDetectedSignalsSuccess = {
    type: string,
    payload: any
}

export type GetDetectedSignalsFailed = {
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

export type HistoryActions = GetDetectedSignals
                            | GetDetectedSignalsSuccess
                            | GetDetectedSignalsFailed
                            | DeleteDetectedSignal
                            | DeleteDetectedSignalSuccess
                            | DeleteDetectedSignalFailed

export const getDetectedSignals = (email: string) => {
    return {
        type: actionTypes.GET_DETECTED_SIGNALS,
        payload: {
            email,
        }
    }
}

export const getDetectedSignalsSuccess = (email: string, history: any) => {
    return {
        type: actionTypes.GET_DETECTED_SIGNALS_SUCCESS,
        payload: {
            email,
            history
        }
    }
}

export const getDetectedSignalsFailed = (error: any) => {
    return {
        type: actionTypes.GET_DETECTED_SIGNALS_FAILED,
        payload: {
            error,
        }
    }
}

export const deleteDetectedSignal = (email: string, id: string) => {
    return {
        type: actionTypes.DELETE_DETECTED_SIGNAL,
        payload: {
            email,
            id
        }
    }
}

export const deleteDetectedSignalSuccess = () => {
    return {
        type: actionTypes.DELETE_DETECTED_SIGNAL_SUCCESS,
        payload: null
    }
}

export const deleteDetectedSignalFailed = (error: string) => {
    return {
        type: actionTypes.DELETE_DETECTED_SIGNAL_FAILED,
        payload: {
            error
        }
    }
}

