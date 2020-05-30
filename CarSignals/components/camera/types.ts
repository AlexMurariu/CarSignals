import { UserState } from "../../state/reducers/authReducer";
import { IPrediction } from "../../state/reducers/predictionReducer";

export interface CameraState {
    user: UserState,
    loadUserInProgress: boolean,
    loadPredictionsInProgress: boolean,
    camera: string,
    predictions: IPrediction[]
}

export interface CameraDispatch {
    getCameraPermission: Function,
    getPredictions: Function,
    clearPredictions: Function
}

export type CameraProps = CameraState & CameraDispatch;