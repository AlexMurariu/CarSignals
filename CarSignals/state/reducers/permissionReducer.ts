import { Record } from 'immutable';
import { actionTypes } from '../types';
import { PermissionActions } from '../actions';

interface IPermissions {
    camera: string;
    cameraRoll: string;
    error: string;
}

const PermissionStateRecord = Record({
    camera: '',
    cameraRoll: '',
    error: ''
});

class PermissionState extends PermissionStateRecord implements IPermissions {
    constructor(props: IPermissions) {
        super(props);
    }
}

const initialState: PermissionState = new PermissionState({ camera: '',  cameraRoll: '', error: ''});

const permissionReducer = (state: PermissionState = initialState, action: PermissionActions) => {
    switch(action.type) {
        case actionTypes.GET_CAMERA_PERMISSION_SUCCESS:
            return {
                ...state,
                camera: action.payload
            }
        
        case actionTypes.GET_CAMERA_PERMISSION_FAILED:
            return {
                ...state,
                camera: '',
                error: action.payload
            }
        

        case actionTypes.GET_CAMERA_ROLL_PERMISSION_SUCCESS:
            return {
                ...state,
                cameraRoll: action.payload
            }

        case actionTypes.GET_CAMERA_ROLL_PERMISSION_FAILED:
            return {
                ...state,
                cameraRoll: '',
                error: action.payload
            }
            
        default: {
            return state;
        }
    }
}

export {
    PermissionState,
    permissionReducer
}