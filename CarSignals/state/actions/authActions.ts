import { actionTypes } from "../types";
import { Alert } from "react-native";

export type LoginStartedAction = {
    type: string;
    payload: any;
}

export type LoginSuccessAction = {
    type: string;
    payload: any;
}

export type LoginFailedAction = {
    type: string;
    payload: any;
}

export type SignUpStartedAction = {
    type: string;
    payload: any;
}

export type SignUpSuccessAction = {
    type: string;
    payload: any;
}

export type SignUpFailedAction = {
    type: string;
    payload: any;
}

export type LogoutAction = {
    type: string;
    payload: any;
}

export type LogoutSuccessAction = {
    type: string;
    payload: any;
}

export type LogoutFailedAction = {
    type: string;
    payload: any;
}

export type UserActions = LoginStartedAction | 
                            LoginSuccessAction | 
                            LoginFailedAction | 
                            SignUpStartedAction |
                            SignUpSuccessAction |
                            SignUpFailedAction |
                            LogoutAction |
                            LogoutSuccessAction |
                            LogoutFailedAction

export const login = (email: string, password: string): LoginStartedAction => {
    return {
        type: actionTypes.LOGIN_STARTED,
        payload: {
            email,
            password
        }
    }
};

export const loginSuccess = (email: string, password: string): LoginSuccessAction => {
    return {
        type: actionTypes.LOGIN_SUCCESS,
        payload: {
            email,
            password
        }
    }
}

export const loginFailed = (error: any): LoginFailedAction => {
    return {
        type: actionTypes.LOGIN_FAILED,
        payload: error
    }
}

export const signUp = (email: string, password: string): SignUpStartedAction => {
    return {
        type: actionTypes.SIGNUP_STARTED,
        payload: {
            email,
            password
        }
    }
};

export const signUpSuccess = (email: string, password: string): SignUpSuccessAction => {
    return {
        type: actionTypes.SIGNUP_SUCCESS,
        payload: {
            email,
            password
        }
    }
}

export const signUpFailed = (error: any): SignUpFailedAction => {
    return {
        type: actionTypes.SIGNUP_FAILED,
        payload: error
    }
}

export const logout = (): LogoutAction => ({
    type: actionTypes.LOGOUT,
    payload: null
}) 

export const logoutSuccess = (): LogoutSuccessAction => ({
    type: actionTypes.LOGOUT_SUCCESS,
    payload: null
}) 

export const logoutFailed = (): LogoutFailedAction => ({
    type: actionTypes.LOGOUT_FAILED,
    payload: null
}) 