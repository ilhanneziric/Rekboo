import * as actionTypes from '../actionTypes/stepActionTypes';

export const stepReducer = (state = 1, action) => {
    switch(action.type){
        case(actionTypes.UPDATE_STEP):
            return state = action.payload;
        default:
            return state;
    }
};