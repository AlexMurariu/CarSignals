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

export const AuthEpic: Epic<Action, Action> = (action$, state$) => 
    action$.pipe(
        filter(isOfType(actionTypes.LOGIN_STARTED)),
        switchMap((action): Promise<any> => {
            const { email, password } = action.payload;
            return AuthService.loginUser(email, password);
        })
    )