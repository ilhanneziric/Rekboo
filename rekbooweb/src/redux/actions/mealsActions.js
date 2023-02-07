import * as actionTypes from '../actionTypes/mealsActionTypes';
import AdminMealsService from '../../Services/AdminMealsService';

export const getMeals = () => async(dispatch) => {
    dispatch({ type: actionTypes.GET_MEALS });
    try {
        const data = await AdminMealsService.getAllMeals();
        dispatch({ 
            type: actionTypes.GET_MEALS_SUCCESS, 
            payload: data.sort((a, b) => b.mealID-a.mealID)
        });
    } catch (error) {
        dispatch({ 
            type: actionTypes.GET_MEALS_ERROR, 
            payload: error 
        });
    }
}

export const addMeal = (meal) => async(dispatch) => {
    dispatch({ type: actionTypes.ADD_MEAL});
    try {
        const data = await AdminMealsService.addMeal(meal);
        dispatch({ 
            type: actionTypes.ADD_MEAL_SUCCESS, 
            payload: data
        });
    } catch (error) {
        dispatch({ 
            type: actionTypes.ADD_MEAL_ERROR, 
            payload: error 
        });
    }
}

export const editMeal = (meal) => async(dispatch) => {
    dispatch({ type: actionTypes.EDIT_MEAL});
    try {
        const data = await AdminMealsService.editMeal(meal);
        dispatch({ 
            type: actionTypes.EDIT_MEAL_SUCCESS, 
            payload: data
        });
    } catch (error) {
        dispatch({ 
            type: actionTypes.EDIT_MEAL_ERROR, 
            payload: error 
        });
    }
}

// export const deleteMeal = (mealID) => async(dispatch) => {
//     dispatch({ type: actionTypes.DELETE_MEAL});
//     try {
//         const data = await AdminMealsService.deleteMeal(mealID);
//         dispatch({ 
//             type: actionTypes.DELETE_MEAL_SUCCESS, 
//             payload: data
//         });
//     } catch (error) {
//         dispatch({ 
//             type: actionTypes.DELETE_MEAL_ERROR, 
//             payload: error 
//         });
//     }
// }