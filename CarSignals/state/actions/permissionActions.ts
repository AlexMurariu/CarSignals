import { actionTypes } from "../types"

export type GetCameraRollPermission = {
    type: string;
    payload: any;
}

export type GetCameraRollPermissionSuccess = {
    type: string;
    payload: any;
}

export type GetCameraRollPermissionFailed = {
    type: string;
    payload: any;
}

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

export type PermissionActions = GetCameraRollPermission 
                                | GetCameraRollPermissionSuccess
                                | GetCameraRollPermissionFailed
                                | GetCameraPermission
                                | GetCameraPermissionSuccess
                                | GetCameraPermissionFailed;

export const getCameraRollPermission = () => {
    return {
        type: actionTypes.GET_CAMERA_ROLL_PERMISSION,
        payload: null
    }
};

export const getCameraRollPermissionSuccess = (status: string) => {
    return {
        type: actionTypes.GET_CAMERA_ROLL_PERMISSION_SUCCESS,
        payload: status
    }
};

export const getCameraRollPermissionFailed = (error: string) => {
    return {
        type: actionTypes.GET_CAMERA_ROLL_PERMISSION_FAILED,
        payload: error
    }
};

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
