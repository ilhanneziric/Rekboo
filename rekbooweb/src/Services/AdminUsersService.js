import axios from "axios";
import { API } from "../config";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
};

const getAllUsers = async () => {
    try {
        const response = await axios.get(API + 'User', {headers})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

export default {
    getAllUsers
}