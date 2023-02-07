import { combineReducers, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { isAuthenticatedReducer } from './reducers/isAuthenticatedReducers';
import { usersReducer } from './reducers/usersReducers';
import { mealsReducer } from './reducers/mealsReducers';

const reducers = combineReducers({
    isAuthenticated: isAuthenticatedReducer,
    users: usersReducer,
    meals: mealsReducer
});

const middleware = [thunk, (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
})];

const store = configureStore({reducer: reducers}, composeWithDevTools(applyMiddleware(...middleware)) );

export default store;