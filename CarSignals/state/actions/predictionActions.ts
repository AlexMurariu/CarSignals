import { actionTypes } from "../types";

export type GetPredictions = {
    type: string,
    payload: any
}

export type GetPredictionsSuccess = {
    type: string,
    payload: any
}

export type GetPredictionsFailed = {
    type: string,
    payload: any
}

export type ClearPredictions = {
    type: string,
    payload: any
}

export type PredictionActions = GetPredictions
                                | GetPredictionsSuccess
                                | GetPredictionsFailed
                                | ClearPredictions;

export const getPredictions = (imageBuffer: any) => {
    return {
        type: actionTypes.GET_PREDICTIONS,
        payload: imageBuffer
    }
}

export const getPredictionsSuccess = (predictions: any) => {
    return {
        type: actionTypes.GET_PREDICTIONS_SUCCESS,
        payload: predictions
    }
}

export const getPredictionsFailed = (error: any) => {
    return {
        type: actionTypes.GET_PREDICTIONS_FAILED,
        payload: error
    }
}

export const clearPredictions = () => {
    return {
        type: actionTypes.CLEAR_PREDICTIONS,
        payload: null
    }
}