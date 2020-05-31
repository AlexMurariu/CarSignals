import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { Dispatch, bindActionCreators } from "redux";
import { CameraComponent } from "../components";
import { CameraDispatch, CameraState } from "../components/camera/types";
import { getPredictions, clearPredictions, getCameraRollPermission, getCameraPermission } from "../state/actions";
import { getPredictionWithHighestProbability } from "../state/selectors";

function mapStateToProps (state: RootState): CameraState {
    const { loadPredictionsInProgress } = state.ui;
    const { camera, cameraRoll } = state.permissions;
    const predictions = getPredictionWithHighestProbability(state);

    return {
        loadPredictionsInProgress,
        camera,
        cameraRoll,
        predictions
    }
}

function mapDispatchToProps (dispatch: Dispatch): CameraDispatch {
    return {
        ...bindActionCreators({
            getCameraPermission,
            getCameraRollPermission,
            getPredictions,
            clearPredictions
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(CameraComponent);