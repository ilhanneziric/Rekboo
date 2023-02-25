import * as actionTypes from '../actionTypes/usersActionTypes';
import UsersService from '../../Services/UsersService';

export const getUsers = () => async(dispatch) => {
  dispatch({ type: actionTypes.GET_USERS });
  try {
    const data = await UsersService.getAllUsers();
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
