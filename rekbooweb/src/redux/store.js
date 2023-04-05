import { combineReducers, applyMiddleware} from 'redux';
import { configureStore } from '@reduxjs/toolkit';
import thunk from 'redux-thunk';
import { composeWithDevTools } from 'redux-devtools-extension';

import { isAuthenticatedReducer, isAdminReducer } from './reducers/isAuthenticatedReducers';
import { usersReducer, userReducer } from './reducers/usersReducers';
import { mealsReducer } from './reducers/mealsReducers';
import { ordersReducer } from './reducers/ordersReducers';
import { orderReducer } from './reducers/orderReducers';
import { stepReducer } from './reducers/stepReducers';

const reducers = combineReducers({
    isAuthenticated: isAuthenticatedReducer,
    isAdmin: isAdminReducer,
    users: usersReducer,
    meals: mealsReducer,
    orders: ordersReducer,
    order: orderReducer,
    user: userReducer,
    step: stepReducer
});

const middleware = [thunk, (getDefaultMiddleware) => getDefaultMiddleware({
    immutableCheck: false,
    serializableCheck: false,
})];

const store = configureStore({reducer: reducers}, composeWithDevTools(applyMiddleware(...middleware)) );

export default store;