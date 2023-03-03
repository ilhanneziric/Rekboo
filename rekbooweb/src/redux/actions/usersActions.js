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

export const getUser = (userID) => async(dispatch) => {
  dispatch({ type: actionTypes.GET_USER });
  try {
    const data = await UsersService.getUser(userID);
    dispatch({ 
      type: actionTypes.GET_USER_SUCCESS, 
      payload: data 
    });
  } catch (error) {
    dispatch({ 
      type: actionTypes.GET_USER_ERROR, 
      payload: error
    });
  }
}
