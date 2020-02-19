import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { Dispatch, bindActionCreators } from "redux";
import { CameraComponent } from "../components";
import { CameraDispatch, CameraState } from "../components/camera/types";

function mapStateToProps (state: RootState): CameraState {
    const user = state.auth;
    const loadUserInProgress = state.ui.loadUserInProgress;

    return {
        user,
        loadUserInProgress
    }
}

// function mapDispatchToProps (dispatch: Dispatch): CameraDispatch {
//     return {
//         ...bindActionCreators({
            
//         }, dispatch)
//     }
// }

export default connect(mapStateToProps)(CameraComponent);