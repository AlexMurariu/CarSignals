import { Epic, ActionsObservable } from "redux-observable";
import 'rxjs';
import { actionTypes } from '../types';
import { switchMap, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import PermissionService from "../../services/permissionService";

interface Action {
    type: string,
    payload?: any,
    params?: {}
}

export const GetCameraRollPermissionEpic: Epic<Action, Action> = (action$, state$) =>
    action$.pipe(
        filter(isOfType(actionTypes.GET_CAMERA_ROLL_PERMISSION)),
        switchMap((action): Promise<any> => {
            return PermissionService.getCameraRollPermissions();
        })
    )

export const GetCameraPermissionEpic: Epic<Action, Action> = (action$, state$) =>
    action$.pipe(
        filter(isOfType(actionTypes.GET_CAMERA_PERMISSION)),
        switchMap((action): Promise<any> => {
            return PermissionService.getCameraPermissions();
        })
    )