import { makeRootReducer } from './reducers';
import { UserState, authReducer } from "./reducers/authReducer";
import { combineReducers, createStore, applyMiddleware } from "redux";
import thunk from 'redux-thunk';

export type AppState = {
    user: UserState
}

const middleware = applyMiddleware(thunk);

export const store = createStore(makeRootReducer(), middleware);