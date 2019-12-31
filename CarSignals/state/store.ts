import { makeRootReducer } from './reducers';
import { createStore, applyMiddleware } from "redux";
import { createEpicMiddleware } from 'redux-observable';
import { rootEpic } from './epics';

function configureStore() {
    const epicMiddleware = createEpicMiddleware();
    const middleware = applyMiddleware(epicMiddleware);
    const store = createStore(makeRootReducer(), middleware);
    
    epicMiddleware.run(rootEpic);

    return store;
}

export const store = configureStore();