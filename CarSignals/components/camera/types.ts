import { UserState } from "../../state/reducers/authReducer";
import { IPrediction } from "../../state/reducers/predictionReducer";

export interface CameraState {
    loadPredictionsInProgress: boolean;
    camera: string;
    cameraRoll: string;
    predictions: IPrediction[];
}

export interface CameraDispatch {
    getCameraPermission: Function;
    getCameraRollPermission: Function;
    getPredictions: Function;
    clearPredictions: Function;
}

export type CameraProps = CameraState & CameraDispatch;