import * as actionTypes from '../actionTypes/isAuthenticatedActionTypes';

export const updIsAuthenticated = () => async(dispatch) => {
    if(localStorage.getItem('token') !== null){
        dispatch({
            type: actionTypes.UPDATE_ISAUTHENTICATED,
            payload: true  
        });
    }else{
        dispatch({
            type: actionTypes.UPDATE_ISAUTHENTICATED,
            payload: false
        });
    }
}