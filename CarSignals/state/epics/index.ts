import { combineEpics } from "redux-observable";
import { LoginEpic, SignUpEpic, LogoutEpic } from "./authEpic";

export const rootEpic = combineEpics(
    LoginEpic,
    SignUpEpic,
    LogoutEpic
);