import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { Dispatch, bindActionCreators } from "redux";
import { CameraComponent } from "../components";
import { CameraDispatch, CameraState } from "../components/camera/types";
import { getPredictions, clearPredictions, getCameraPermission } from "../state/actions";
import { getPredictionWithHighestProbability } from "../state/selectors";

function mapStateToProps (state: RootState): CameraState {
    const user = state.auth;
    const { loadUserInProgress, loadPredictionsInProgress } = state.ui;
    const camera = state.permissions.camera;
    const predictions = getPredictionWithHighestProbability(state);

    return {
        user,
        loadUserInProgress,
        loadPredictionsInProgress,
        camera,
        predictions
    }
}

function mapDispatchToProps (dispatch: Dispatch): CameraDispatch {
    return {
        ...bindActionCreators({
            getCameraPermission,
            getPredictions,
            clearPredictions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraComponent);