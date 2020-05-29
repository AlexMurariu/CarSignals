import { UserActions } from './../actions';
import { Record } from 'immutable';
import { actionTypes } from '../types';

interface IUser {
    email: string,
    password: string,
    loadUserDone: boolean,
    error: string
}

const UserStateRecord = Record({
    email: '',
    password: '',
    loadUserDone: false,
    error: ''
});

class UserState extends UserStateRecord implements IUser {
    constructor(props: IUser) {
        super(props)
    }
}

const initialState: UserState = new UserState({ email: '', password: '', loadUserDone: false, error: ''});

const authReducer = (state: UserState = initialState, action: UserActions) => {
    switch (action.type) {
        case actionTypes.SIGNUP_SUCCESS:
        case actionTypes.LOGIN_SUCCESS: {
            const { email, password } = action.payload;
            const error = '';
            return new UserState({ email, password, loadUserDone: true ,error});
        }

        case actionTypes.SIGNUP_FAILED:
        case actionTypes.LOGIN_FAILED: {
            const error = action.payload;
            return {
                ...state,
                loadUserDone: true,
                error
            };
        }

        case actionTypes.LOGOUT_SUCCESS: {
            const error = '';
            return new UserState({email: '', password: '', loadUserDone: false, error});
        }

        default: {
            return state;
        }
    }
}

export {
    UserState,
    authReducer
}