import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { Dispatch, bindActionCreators } from "redux";
import { HistoryComponent } from "../components";
import { HistoryDispatch, HistoryState } from "../components/history/types";
import { getHistory, deleteDetectedSignal } from "../state/actions";
import { getLastWeekHistory } from "../state/selectors";
import { getLastMonthHistory, getLastYearHistory } from "../state/selectors/historySelector";

function mapStateToProps (state: RootState): HistoryState {
    const user = state.auth;
    const loadHistoryInProgress = state.ui.loadHistoryInProgress;
    const history = state.history.history;
    const lastWeekPredictions = getLastWeekHistory(state);
    const lastMonthPredictions = getLastMonthHistory(state);
    const lastYearPredictions = getLastYearHistory(state);

    return {
        user,
        loadHistoryInProgress,
        history,
        lastWeekPredictions,
        lastMonthPredictions,
        lastYearPredictions
    }
}

function mapDispatchToProps (dispatch: Dispatch): HistoryDispatch {
    return {
        ...bindActionCreators({
            getHistory,
            deleteDetectedSignal
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(HistoryComponent);