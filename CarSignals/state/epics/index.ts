import { combineEpics } from "redux-observable";
import { LoginEpic, SignUpEpic } from "./authEpic";

export const rootEpic = combineEpics(
    LoginEpic,
    SignUpEpic
);