import { combineReducers, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { isAuthenticatedReducers } from './reducers/isAuthenticatedReducers';

const reducers = combineReducers({
    isAuthenticated: isAuthenticatedReducers
});

const middleware = [thunk];

const store = configureStore(reducers, composeWithDevTools(applyMiddleware(...middleware)) );

export default store;