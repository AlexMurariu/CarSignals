import { getLastWeekDate, getLastMonthDate, getLastYearDate } from './../../utils/dateUtils';
import { RootState } from './../reducers';
import { createSelector } from 'reselect';
import { IPrediction } from '../reducers/predictionReducer';
import * as _ from 'lodash';
import { isDateGreaterThan } from '../../utils';

const getHistory: any = (state: RootState): Array<IPrediction> => {
    const history = state.history.history;
    return history;
}

export const getLastWeekHistory = createSelector<RootState, Array<IPrediction>, Array<IPrediction>>(
    getHistory,
    (history) => {
        if (!history) {
            return [];
        }

        return history.filter((prediction: IPrediction) => {
            return isDateGreaterThan(prediction.predictionDate, getLastWeekDate());
        })
    }
)

export const getLastMonthHistory = createSelector<RootState, Array<IPrediction>, Array<IPrediction>>(
    getHistory,
    (history) => {
        if (!history) {
            return [];
        }

        return history.filter((prediction: IPrediction) => {
            return isDateGreaterThan(prediction.predictionDate, getLastMonthDate());
        })
    }
)

export const getLastYearHistory = createSelector<RootState, Array<IPrediction>, Array<IPrediction>>(
    getHistory,
    (history) => {
        if (!history) {
            return [];
        }

        return history.filter((prediction: IPrediction) => {
            return isDateGreaterThan(prediction.predictionDate, getLastYearDate());
        })
    }
)