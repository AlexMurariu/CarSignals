import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { Dispatch, bindActionCreators } from "redux";
import { CameraComponent } from "../components";
import { CameraDispatch, CameraState } from "../components/camera/types";
import { getCameraPermission } from "../state/actions/permissionActions";

function mapStateToProps (state: RootState): CameraState {
    const user = state.auth;
    const loadUserInProgress = state.ui.loadUserInProgress;
    const camera = state.permissions.camera;

    return {
        user,
        loadUserInProgress,
        camera
    }
}

function mapDispatchToProps (dispatch: Dispatch): CameraDispatch {
    return {
        ...bindActionCreators({
            getCameraPermission
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraComponent);