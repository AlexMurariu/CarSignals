import { connect } from "react-redux";
import { RootState } from "../state/reducers";
import { Dispatch, bindActionCreators } from "redux";
import HeaderComponent from "../components/header/HeaderComponent";
import { HeaderDataSet, HeaderDispatch } from "../components/header/types";
import { logout, clearPredictions } from "../state/actions";

function mapStateToProps (state: RootState): HeaderDataSet {
    const user = state.auth;
    
    return {
        user
    }
}

function mapDispatchToProps (dispatch: Dispatch): HeaderDispatch {
    return {
        ...bindActionCreators({
            logout,
            clearPredictions
        }, dispatch)
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(HeaderComponent);