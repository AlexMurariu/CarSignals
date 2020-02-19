import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { Dispatch, bindActionCreators } from "redux";
import { GuideComponent } from "../components";
import { GuideDispatch, GuideState } from "../components/guide/types";

function mapStateToProps (state: RootState): GuideState {
    const user = state.auth;
    const loadUserInProgress = state.ui.loadUserInProgress;

    return {
        user,
        loadUserInProgress
    }
}

// function mapDispatchToProps (dispatch: Dispatch): GuideDispatch {
//     return {
//         ...bindActionCreators({
            
//         }, dispatch)
//     }
// }

export default connect(mapStateToProps)(GuideComponent);