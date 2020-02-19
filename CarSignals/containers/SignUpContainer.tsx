import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { SignUpUserDataState, SignUpUserDispatch } from "../components/signUp/types";
import { Dispatch, bindActionCreators } from "redux";
import { signUp } from '../state/actions/authActions';
import { SignUpComponent } from "../components";

function mapStateToProps (state: RootState): SignUpUserDataState {
    const user = state.auth;
    const loadUserInProgress = state.ui.loadUserInProgress;

    return {
        user,
        loadUserInProgress
    }
}

function mapDispatchToProps (dispatch: Dispatch): SignUpUserDispatch {
    return {
        ...bindActionCreators({
            signUp
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(SignUpComponent);