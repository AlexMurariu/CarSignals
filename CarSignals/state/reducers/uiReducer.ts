import { Record } from 'immutable';
import { actionTypes } from '../types';

interface RootAction {
    type: string,
    payload: any
}

interface IUiState {
    loadUserInProgress: boolean;
    loadPredictionsInProgress: boolean;
    loadingLogOut: boolean;
    loadHistoryInProgress: boolean;
}

const UiStateRecord = Record({
    loadUserInProgress: false,
    loadPredictionsInProgress: false,
    loadingLogOut: false,
    loadHistoryInProgress: false
})

class UiState extends UiStateRecord implements IUiState {
    constructor(props: IUiState) {
        super(props);
    }
}

const initialState = new UiState({
    loadUserInProgress: false,
    loadPredictionsInProgress: false,
    loadingLogOut: false,
    loadHistoryInProgress: false
})

function uiReducer(state = initialState, action: RootAction): UiState {
    switch(action.type) {
        case actionTypes.SIGNUP_STARTED:
        case actionTypes.LOGIN_STARTED: {
            return state.merge({ loadUserInProgress: true });
        }

        case actionTypes.SIGNUP_SUCCESS:
        case actionTypes.LOGIN_SUCCESS: {
            return state.merge({ loadUserInProgress: false });
        }

        case actionTypes.SIGNUP_FAILED:
        case actionTypes.LOGIN_FAILED: {
            return state.merge({ loadUserInProgress: false });
        }

        case actionTypes.GET_PREDICTIONS: {
            return state.merge({ loadPredictionsInProgress: true });
        }

        case actionTypes.GET_PREDICTIONS_FAILED:
        case actionTypes.GET_PREDICTIONS_SUCCESS: {
            return state.merge({ loadPredictionsInProgress: false });
        }

        case actionTypes.LOGOUT: {
            return state.merge({ loadingLogOut: true });
        }

        case actionTypes.LOGOUT_FAILED:
        case actionTypes.LOGOUT_SUCCESS: {
            return state.merge({ loadingLogOut: false });
        }
    
        case actionTypes.GET_HISTORY: {
            return state.merge({ loadHistoryInProgress: true });
        }

        case actionTypes.GET_HISTORY_FAILED:
        case actionTypes.GET_HISTORY_SUCCESS: {
            return state.merge({ loadHistoryInProgress: false })
        }

        default: {
            return state;
        }
    }
}

export {
    uiReducer,
    UiState
}