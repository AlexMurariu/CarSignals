import { GetCameraPermissionEpic } from './permissionEpics';
import { combineEpics } from "redux-observable";
import { LoginEpic, SignUpEpic, LogoutEpic } from "./authEpic";
import { GetPredictionsEpic } from './predictionEpic';

export const rootEpic = combineEpics(
    LoginEpic,
    SignUpEpic,
    LogoutEpic,
    GetCameraPermissionEpic,
    GetPredictionsEpic
);