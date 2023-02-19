import * as actionTypes from '../actionTypes/orderActionTypes';

export const orderReducer = (state = null, action) => {
    switch(action.type){
        case(actionTypes.UPDATE_ORDER):
            return state = action.payload;
        default:
            return state;
    }
};