import { IPrediction } from "../../state/reducers/predictionReducer";

export interface CameraState {
    loadPredictionsInProgress: boolean;
    loadUserInProgress: boolean;
    userUid: string;
    camera: string;
    cameraRoll: string;
    predictions: IPrediction[];
}

export interface CameraDispatch {
    getCameraPermission: Function;
    getCameraRollPermission: Function;
    getPredictions: Function;
    clearPredictions: Function;
    addPredictionsToHistory: Function;
}

export type CameraProps = CameraState & CameraDispatch;