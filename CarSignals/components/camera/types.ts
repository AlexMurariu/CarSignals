import { UserState } from "../../state/reducers/authReducer";

export interface CameraState {
    user: UserState,
    loadUserInProgress: boolean
}

export interface CameraDispatch {
    
}

export type CameraProps = CameraState & CameraDispatch;