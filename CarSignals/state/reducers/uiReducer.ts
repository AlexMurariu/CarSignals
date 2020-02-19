import { Record } from 'immutable';
import { actionTypes } from '../types';

interface RootAction {
    type: string,
    payload: any
}

interface IUiState {
    loadUserInProgress: boolean
}

const UiStateRecord = Record({
    loadUserInProgress: false
})

class UiState extends UiStateRecord implements IUiState {
    constructor(props: IUiState) {
        super(props);
    }
}

const initialState = new UiState({
    loadUserInProgress: false
})

function uiReducer(state = initialState, action: RootAction): UiState {
    switch(action.type) {
        case actionTypes.LOGIN_STARTED: {
            return state.merge({ loadUserInProgress: true });
        }
        case actionTypes.LOGIN_SUCCESS: {
            return state.merge({ loadUserInProgress: false });
        }
        case actionTypes.LOGIN_FAILED: {
            return state.merge({ loadUserInProgress: false })
        }
        case actionTypes.SIGNUP_STARTED: {
            return state.merge({ loadUserInProgress: true });
        }
        case actionTypes.SIGNUP_SUCCESS: {
            return state.merge({ loadUserInProgress: false });
        }
        case actionTypes.SIGNUP_FAILED: {
            return state.merge({ loadUserInProgress: false })
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