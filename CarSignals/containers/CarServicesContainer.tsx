import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { Dispatch, bindActionCreators } from "redux";
import { CarServiceComponent } from "../components";
import { CarServiceDispatch, CarServiceState } from "../components/carServices/types";

function mapStateToProps (state: RootState): CarServiceState {
    const user = state.auth;
    const loadUserInProgress = state.ui.loadUserInProgress;

    return {
        user,
        loadUserInProgress
    }
}

// function mapDispatchToProps (dispatch: Dispatch): CarServiceDispatch {
//     return {
//         ...bindActionCreators({
            
//         }, dispatch)
//     }
// }

export default connect(mapStateToProps)(CarServiceComponent);