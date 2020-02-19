import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { LoginUserDataState, LoginUserDispatch } from "../components/login/types";
import { Dispatch, bindActionCreators } from "redux";
import HeaderComponent from "../components/header/HeaderComponent";
import { HeaderDataSet, HeaderDispatch } from "../components/header/types";
import { logout } from "../state/actions/authActions";

function mapStateToProps (state: RootState): HeaderDataSet {
    const user = state.auth;
    
    return {
        user
    }
}

function mapDispatchToProps (dispatch: Dispatch): HeaderDispatch {
    return {
        ...bindActionCreators({
            logout
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);