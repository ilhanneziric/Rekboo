import { combineReducers, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { isAuthenticatedReducer } from './reducers/isAuthenticatedReducers';

const reducers = combineReducers({
    isAuthenticated: isAuthenticatedReducer
});

const middleware = [thunk];

const store = configureStore({reducer: reducers}, composeWithDevTools(applyMiddleware(...middleware)) );

export default store;