import { Epic, ActionsObservable } from "redux-observable";
import 'rxjs';
import { actionTypes } from '../types';
import { switchMap, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import AuthService from '../../services/authService';

interface Action {
    type: string,
    payload?: any,
    params?: {}
}

export const LoginEpic: Epic<Action, Action> = (action$, state$) => 
    action$.pipe(
        filter(isOfType(actionTypes.LOGIN_STARTED)),
        switchMap((action): Promise<any> => {
            const { email, password } = action.payload;
            return AuthService.loginUser(email, password);
        })
    )

export const SignUpEpic: Epic<Action, Action> = (action$, state$) =>
    action$.pipe(
        filter(isOfType(actionTypes.SIGNUP_STARTED)),
        switchMap((action): Promise<any> => {
            const { email, password } = action.payload;
            return AuthService.signUpUser(email, password);
        })
    )

export const LogoutEpic: Epic<Action, Action> = (action$, state$) =>
    action$.pipe(
        filter(isOfType(actionTypes.LOGOUT)),
        switchMap((action): Promise<any> => {
            return AuthService.logoutUser();
        })
    )

