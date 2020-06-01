import { UserState } from "../../state/reducers/authReducer";
import { IPrediction } from "../../state/reducers/predictionReducer";

export interface HistoryState {
    user: UserState;
    loadHistoryInProgress: boolean;
    history: IPrediction[];
    lastWeekPredictions: IPrediction[];
    lastMonthPredictions: IPrediction[];
    lastYearPredictions: IPrediction[];
}

export interface HistoryDispatch {
    getHistory: Function;
    deleteDetectedSignal: Function;
}

export type HistoryProps = HistoryState & HistoryDispatch;