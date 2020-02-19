import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { Dispatch, bindActionCreators } from "redux";
import { HistoryComponent } from "../components";
import { HistoryDispatch, HistoryState } from "../components/history/types";

function mapStateToProps (state: RootState): HistoryState {
    const user = state.auth;
    const loadUserInProgress = state.ui.loadUserInProgress;

    return {
        user,
        loadUserInProgress
    }
}

// function mapDispatchToProps (dispatch: Dispatch): HistoryDispatch {
//     return {
//         ...bindActionCreators({
            
//         }, dispatch)
//     }
// }

export default connect(mapStateToProps)(HistoryComponent);