import * as Redux from 'redux';
import * as ReduxDevTools from 'redux-devtools-extension';

import thunk from 'redux-thunk';
import moviesReducer from './reducers/moviesReducer';

const state = Redux.combineReducers({
    moviesReducer: moviesReducer,
});

export type IAppState = ReturnType<typeof state>;

const store = Redux.createStore(
    state,
    ReduxDevTools.composeWithDevTools(
        Redux.applyMiddleware(thunk)
    )
);

export default store;