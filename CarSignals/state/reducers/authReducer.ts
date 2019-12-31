import { UserActions } from './../actions';
import { Record } from 'immutable';
import { actionTypes } from '../types';

interface IUser {
    email: string,
    password: string
}

const UserStateRecord = Record({
    email: '',
    password: ''
});

class UserState extends UserStateRecord implements IUser {
    constructor(props: IUser) {
        super(props)
    }
}

const initialState: UserState = new UserState({ email: '', password: ''});

const authReducer = (state: UserState = initialState, action: UserActions) => {
    switch (action.type) {
        case actionTypes.LOGIN_SUCCESS: {
            const { email, password } = action.payload
            return new UserState({ email, password });
        }

        case actionTypes.LOGIN_FAILED: {
            return state;
        }
        
        case actionTypes.SIGNUP_STARTED: {
            const { email, password } = action.payload
            return new UserState({ email, password });
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