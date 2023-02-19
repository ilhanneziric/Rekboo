import * as actionTypes from '../actionTypes/orderActionTypes';

export const updateOrder = order => {
    return {
        type: actionTypes.UPDATE_ORDER,
        payload: order
    };
};