import { Epic, ActionsObservable } from "redux-observable";
import 'rxjs';
import { actionTypes } from '../types';
import { switchMap, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import HistoryService from "../../services/historyService";

interface Action {
    type: string,
    payload?: any,
    params?: {}
}

export const GetHistoryEpic: Epic<Action, Action> = (action$, state$) => 
    action$.pipe(
        filter(isOfType(actionTypes.GET_HISTORY)),
        switchMap((action): Promise<any> => {
            const uid = action.payload.uid;
            return HistoryService.getHistory(uid);
        })
    )
