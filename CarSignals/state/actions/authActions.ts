import { actionTypes } from "../types";
import { createAction } from 'typesafe-actions';
import { Alert } from "react-native";

export type LoginStartedAction = {
    type: string;
    payload: any;
}

export type SignUpStartedAction = {
    type: string;
    payload: any;
}

export type UserActions = LoginStartedAction | SignUpStartedAction;

export const login = (email: string, password: string): LoginStartedAction => {
    return {
        type: actionTypes.LOGIN_STARTED,
        payload: {
            email,
            password
        }
    }
};

export const signUp = (email: string, password: string): SignUpStartedAction => ({
    type: actionTypes.SIGNUP_STARTED,
    payload: {
        email,
        password
    }
})