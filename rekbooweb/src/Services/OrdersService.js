import axios from "axios";
import { API } from "../config";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
};

const getAllOrders = async () => {
    try {
        const response = await axios.get(API + 'Order', {headers})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const addOrder = async (order) => {
    try {
        const response = await axios.post(API + 'Order', order, {headers})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const editOrder = async (order) => {
    try {
        const response = await axios.put(API + `Order/${order.orderID}`, order, {headers})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

// const deleteOrder = async (orderID) => {//not implemented
//     try {
//         var response = await axios.delete(API + `Order/${orderID}`, {headers})
//         return await response.data;
//     } catch (err) {
//         return err.message;
//     }
// };

export default {
    getAllOrders,
    addOrder,
    editOrder,
    // deleteOrder
}