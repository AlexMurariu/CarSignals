import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { UserDataState, UserDispatch } from "../components/login/types";
import { Dispatch, bindActionCreators } from "redux";
import { login } from '../state/actions/authActions';
import { LoginComponent } from "../components";

function mapStateToProps (state: RootState): UserDataState {
    const user = state.auth;
    
    return {
        user
    }
}

function mapDispatchToProps (dispatch: Dispatch): UserDispatch {
    return {
        ...bindActionCreators({
            login
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);