import { combineEpics } from "redux-observable";
import { AuthEpic } from "./authEpic";

export const rootEpic = combineEpics(
    AuthEpic
);