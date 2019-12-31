import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import Login from "./LoginScreen";
import { UserDataState, UserDispatch } from "./types";
import { Dispatch, bindActionCreators } from "redux";
import { login, signUp } from '../state/actions/authActions';

function mapStateToProps (state: RootState): UserDataState {
    const user = state.auth;
    
    return {
        user
    }
}

function mapDispatchToProps (dispatch: Dispatch): UserDispatch {
    return {
        ...bindActionCreators({
            login,
            signUp
        }, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Login);