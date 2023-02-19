import axios from "axios";
import { API, getHeaders } from "../config";

const getAllOrders = async () => {
    try {
        const response = await axios.get(API + 'Order', {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const addOrder = async (order) => {
    try {
        const response = await axios.post(API + 'Order', order, {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const editOrder = async (order) => {
    try {
        const response = await axios.put(API + `Order/${order.orderID}`, order, {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

// const deleteOrder = async (orderID) => {//not implemented
//     try {
//         var response = await axios.delete(API + `Order/${orderID}`, {headers: getHeaders()})
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