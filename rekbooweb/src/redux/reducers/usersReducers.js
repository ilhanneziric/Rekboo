import * as actionTypes from '../actionTypes/usersActionTypes';

const initialState = {
    users: [],
    loading: false,
    error: null,
};

export const usersReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.GET_USERS):
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.GET_USERS_SUCCESS:
            return {
                ...state,
                loading: false,
                users: action.payload,
            };
        case actionTypes.GET_USERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        default:
            return state;
    }
};