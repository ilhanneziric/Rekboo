import axios from "axios";
import { API, getHeaders } from "../config";

const getAllUsers = async () => {
    try {
        const response = await axios.get(API + 'User', {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

export default {
    getAllUsers
}