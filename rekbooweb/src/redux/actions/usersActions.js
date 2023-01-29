import * as actionTypes from '../actionTypes/usersActionTypes';
import AdminUsersService from '../../Services/AdminUsersService';

export const getUsers = () => async(dispatch) => {
        dispatch({ type: actionTypes.GET_USERS });
        try {
          const data = await AdminUsersService.getAllUsers();
          dispatch({ 
            type: actionTypes.GET_USERS_SUCCESS, 
            payload: data 
          });
        } catch (error) {
          dispatch({ 
            type: actionTypes.GET_USERS_ERROR, 
            payload: error 
          });
        }
}
