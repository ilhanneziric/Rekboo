import * as actionTypes from '../actionTypes/ordersActionTypes';
import OrdersService from '../../Services/OrdersService';

export const getOrders = () => async(dispatch) => {
    dispatch({ type: actionTypes.GET_ORDERS });
    try {
        const data = await OrdersService.getAllOrders();
        dispatch({ 
            type: actionTypes.GET_ORDERS_SUCCESS, 
            payload: data.sort((a, b) => b.orderID-a.orderID)
        });
    } catch (error) {
        dispatch({ 
            type: actionTypes.GET_ORDERS_ERROR, 
            payload: error 
        });
    }
}

export const addOrder = (order) => async(dispatch) => {
    dispatch({ type: actionTypes.ADD_ORDER});
    try {
        const data = await OrdersService.addOrder(order);
        dispatch({ 
            type: actionTypes.ADD_ORDER_ERROR, 
            payload: data
        });
    } catch (error) {
        dispatch({ 
            type: actionTypes.ADD_ORDER_SUCCESS, 
            payload: error 
        });
    }
}

export const editOrder = (order) => async(dispatch) => {
    dispatch({ type: actionTypes.EDIT_ORDER});
    try {
        const data = await OrdersService.editOrder(order);
        dispatch({ 
            type: actionTypes.EDIT_ORDER_SUCCESS, 
            payload: data
        });
    } catch (error) {
        dispatch({ 
            type: actionTypes.EDIT_ORDER_ERROR, 
            payload: error 
        });
    }
}

// export const deleteOrder = (orderID) => async(dispatch) => {
//     dispatch({ type: actionTypes.DELETE_ORDER});
//     try {
//         const data = await AdminMealsService.deleteOrder(orderID);
//         dispatch({ 
//             type: actionTypes.DELETE_ORDER_SUCCESS, 
//             payload: data
//         });
//     } catch (error) {
//         dispatch({ 
//             type: actionTypes.DELETE_ORDER_ERROR, 
//             payload: error 
//         });
//     }
// }