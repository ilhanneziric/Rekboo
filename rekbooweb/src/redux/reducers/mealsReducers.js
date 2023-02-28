import * as actionTypes from '../actionTypes/mealsActionTypes';

const initialState = {
    meals: [],
    loading: false,
    error: null,
};

export const mealsReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.GET_MEALS):
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.GET_MEALS_SUCCESS:
            return {
                ...state,
                loading: false,
                meals: action.payload,
            };
        case actionTypes.GET_MEALS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case(actionTypes.ADD_MEAL):
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.ADD_MEAL_SUCCESS:
            return {
                ...state,
                loading: false,
                meals: [...state.meals, action.payload]
            };
        case actionTypes.ADD_MEAL_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case(actionTypes.EDIT_MEAL):
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.EDIT_MEAL_SUCCESS:
            return {
                loading: false,
                meals: state.meals.map(o => o.mealID === action.payload.mealID ? action.payload : o)
            };
        case actionTypes.EDIT_MEAL_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        // case(actionTypes.DELETE_MEAL):
        //     return {
        //         ...state,
        //         loading: true,
        //         error: null,
        //     };
        // case actionTypes.DELETE_MEAL_SUCCESS:
        //     return {
        //         loading: false,
        //         meals: state.meals.filter(o => o.mealID !== action.payload.mealID)
        //     };
        // case actionTypes.DELETE_MEAL_ERROR:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload,
        //     };
        default:
            return state;
    }
};