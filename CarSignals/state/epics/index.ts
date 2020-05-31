import { GetCameraPermissionEpic, GetCameraRollPermissionEpic } from './permissionEpics';
import { combineEpics } from "redux-observable";
import { LoginEpic, SignUpEpic, LogoutEpic } from "./authEpic";
import { GetPredictionsEpic } from './predictionEpic';

export const rootEpic = combineEpics(
    LoginEpic,
    SignUpEpic,
    LogoutEpic,
    GetCameraRollPermissionEpic,
    GetCameraPermissionEpic,
    GetPredictionsEpic
);