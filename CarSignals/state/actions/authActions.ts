import { actionTypes } from "../types";

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

export type UserActions = LoginStartedAction | 
                            LoginSuccessAction | 
                            LoginFailedAction | 
                            SignUpStartedAction |
                            SignUpSuccessAction |
                            SignUpFailedAction;

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

export const loginFailed = (): LoginFailedAction => {
    return {
        type: actionTypes.LOGIN_FAILED,
        payload: null
    }
}

export const signUp = (email: string, password: string): SignUpStartedAction => ({
    type: actionTypes.SIGNUP_STARTED,
    payload: {
        email,
        password
    }
})

export const signUpSuccess = (email: string, password: string): SignUpSuccessAction => ({
    type: actionTypes.SIGNUP_SUCCESS,
    payload: {
        email,
        password
    }
})

export const signUpFailed = (): SignUpFailedAction => ({
    type: actionTypes.SIGNUP_FAILED,
    payload: null
})