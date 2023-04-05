import * as actionTypes from '../actionTypes/isAuthenticatedActionTypes';
import jwt from 'jwt-decode'

export const updIsAuthenticated = () => async(dispatch) => {
    var token = localStorage.getItem('token');
    if(token !== null && token !== undefined){
        dispatch({
            type: actionTypes.UPDATE_ISAUTHENTICATED,
            payload: true  
        });
        const user = jwt(token);
        if(user.role === 'Admin'){
            dispatch({
                type: actionTypes.UPDATE_ISADMIN,
                payload: true  
            });
        }
    }else{
        dispatch({
            type: actionTypes.UPDATE_ISAUTHENTICATED,
            payload: false
        });
    }
}