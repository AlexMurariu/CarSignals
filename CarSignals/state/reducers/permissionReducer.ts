import { Record } from 'immutable';
import { actionTypes } from '../types';
import { PermissionActions } from '../actions';

interface IPermissions {
    camera: string,
    error: string
}

const PermissionStateRecord = Record({
    camera: '',
    error: '',
});

class PermissionState extends PermissionStateRecord implements IPermissions {
    constructor(props: IPermissions) {
        super(props);
    }
}

const initialState: PermissionState = new PermissionState({ camera: '', error: ''});

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
        
        default: {
            return state;
        }
    }
}

export {
    PermissionState,
    permissionReducer
}