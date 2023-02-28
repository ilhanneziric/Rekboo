import * as actionTypes from '../actionTypes/ordersActionTypes';

const initialState = {
    orders: [],
    loading: false,
    error: null,
};

export const ordersReducer = (state = initialState, action) => {
    switch(action.type){
        case(actionTypes.GET_ORDERS):
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.GET_ORDERS_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: action.payload,
            };
        case actionTypes.GET_ORDERS_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case(actionTypes.ADD_ORDER):
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.ADD_ORDER_SUCCESS:
            return {
                ...state,
                loading: false,
                orders: [...state.orders, action.payload]
            };
        case actionTypes.ADD_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        case(actionTypes.EDIT_ORDER):
            return {
                ...state,
                loading: true,
                error: null,
            };
        case actionTypes.EDIT_ORDER_SUCCESS:
            return {
                loading: false,
                orders: state.orders.map(o => o.orderID === action.payload.orderID ? action.payload : o)
            };
        case actionTypes.EDIT_ORDER_ERROR:
            return {
                ...state,
                loading: false,
                error: action.payload,
            };
        // case(actionTypes.DELETE_ORDER):
        //     return {
        //         ...state,
        //         loading: true,
        //         error: null,
        //     };
        // case actionTypes.DELETE_ORDER_SUCCESS:
        //     return {
        //         loading: false,
        //         orders: state.orders.filter(o => o.orderID !== action.payload.orderID)
        //     };
        // case actionTypes.DELETE_ORDER_ERROR:
        //     return {
        //         ...state,
        //         loading: false,
        //         error: action.payload,
        //     };
        default:
            return state;
    }
};