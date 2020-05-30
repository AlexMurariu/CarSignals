import { Record } from 'immutable';
import { actionTypes } from '../types';

interface RootAction {
    type: string,
    payload: any
}

interface IUiState {
    loadUserInProgress: boolean;
    loadPredictionsInProgress: boolean;
}

const UiStateRecord = Record({
    loadUserInProgress: false,
    loadPredictionsInProgress: false
})

class UiState extends UiStateRecord implements IUiState {
    constructor(props: IUiState) {
        super(props);
    }
}

const initialState = new UiState({
    loadUserInProgress: false,
    loadPredictionsInProgress: false
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
            return state.merge({ loadUserInProgress: false })
        }

        case actionTypes.GET_PREDICTIONS: {
            return state.merge({ loadPredictionsInProgress: true })
        }

        case actionTypes.GET_PREDICTIONS_SUCCESS: {
            return state.merge({ loadPredictionsInProgress: false })
        }

        case actionTypes.GET_PREDICTIONS_FAILED: {
            return state.merge({ loadPredictionsInProgress: false })
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