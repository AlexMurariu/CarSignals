import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { LoginUserDataState, LoginUserDispatch } from "../components/login/types";
import { Dispatch, bindActionCreators } from "redux";
import { login } from '../state/actions/authActions';
import { LoginComponent } from "../components";

function mapStateToProps (state: RootState): LoginUserDataState {
    const user = state.auth;
    const loadUserInProgress = state.ui.loadUserInProgress;

    return {
        user,
        loadUserInProgress
    }
}

function mapDispatchToProps (dispatch: Dispatch): LoginUserDispatch {
    return {
        ...bindActionCreators({
            login
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);