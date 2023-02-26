import axios from "axios";
import { API, getHeaders } from "../config";

const getAllMeals = async (params) => {
    try {
        const response = await axios.get(API + 'Meal?' + new URLSearchParams(params).toString(), {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const getTags = async () => {
    try {
        const response = await axios.get(API + 'Meal/tags', {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const addMeal = async (meal) => {
    try {
        const response = await axios.post(API + 'Meal', meal, {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const editMeal = async (meal) => {
    try {
        const response = await axios.put(API + `Meal/${meal.mealID}`, meal, {headers: getHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

// const deleteMeal = async (mealID) => {//not implemented
//     try {
//         var response = await axios.delete(API + `Meal/${mealID}`, {headers: getHeaders()})
//         return await response.data;
//     } catch (err) {
//         return err.message;
//     }
// };

export default {
    getAllMeals,
    getTags,
    addMeal,
    editMeal,
    // deleteMeal
}