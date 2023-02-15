import axios from "axios";
import { API } from "../config";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
};

const login = async (data) => {
    try {
        const response = await axios.post(API + `User/login`, data)
        return await response.data;
    } catch (err) {
        return false;
    }
};

const register = async (data) => {
    try {
        const response = await axios.post(API + `User`, data);
        return true;
    } catch (err) {
        return false;
    }
};

const existUser = async (email) => {
    try {
        const response = await axios.get(API + `User/exist?email=${email}`)
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

export default {
    login,
    register,
    existUser
}