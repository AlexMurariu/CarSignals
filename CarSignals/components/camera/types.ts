import { UserState } from "../../state/reducers/authReducer";

export interface CameraState {
    user: UserState,
    loadUserInProgress: boolean,
    camera: string
}

export interface CameraDispatch {
    getCameraPermission: Function
}

export type CameraProps = CameraState & CameraDispatch;