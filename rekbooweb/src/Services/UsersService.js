import axios from "axios";
import { API, getHeaders } from "../config";

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


const addContactDataToUser = async (userID,data) => {
    try {
        const response = await axios.put(API + `User/${userID}`, data, {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return false
    }
};

const getAllUsers = async () => {
    try {
        const response = await axios.get(API + 'User', {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const getUser = async (userID) => {
    try {
        const response = await axios.get(API + `User/${userID}`, {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

export default {
    login,
    register,
    existUser,
    addContactDataToUser,
    getAllUsers,
    getUser
}