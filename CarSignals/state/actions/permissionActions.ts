import { actionTypes } from "../types"

export type GetCameraPermission = {
    type: string;
    payload: any;
}

export type GetCameraPermissionSuccess = {
    type: string;
    payload: any;
}

export type GetCameraPermissionFailed = {
    type: string;
    payload: any;
}

export type PermissionActions = GetCameraPermission 
                                | GetCameraPermissionSuccess
                                | GetCameraPermissionFailed;

export const getCameraPermission = () => {
    return {
        type: actionTypes.GET_CAMERA_PERMISSION,
        payload: null
    }
};

export const getCameraPermissionSuccess = (status: string) => {
    return {
        type: actionTypes.GET_CAMERA_PERMISSION_SUCCESS,
        payload: status
    }
};

export const getCameraPermissionFailed = (error: string) => {
    return {
        type: actionTypes.GET_CAMERA_PERMISSION_FAILED,
        payload: error
    }
};
