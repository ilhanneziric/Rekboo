import * as actionTypes from '../actionTypes/stepActionTypes';

export const updStep = (step) => async(dispatch) => {
    dispatch({
        type: actionTypes.UPDATE_STEP,
        payload: step  
    });
}