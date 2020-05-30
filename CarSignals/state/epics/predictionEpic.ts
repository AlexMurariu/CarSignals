import { Epic, ActionsObservable } from "redux-observable";
import 'rxjs';
import { actionTypes } from '../types';
import { switchMap, filter } from 'rxjs/operators';
import { isOfType } from 'typesafe-actions';
import PredictionService from "../../services/predictionService";

interface Action {
    type: string,
    payload?: any,
    params?: {}
}

export const GetPredictionsEpic: Epic<Action, Action> = (action$, state$) =>
    action$.pipe(
        filter(isOfType(actionTypes.GET_PREDICTIONS)),
        switchMap((action): Promise<any> => {
            return PredictionService.getPredictions(action.payload);
        })
    )