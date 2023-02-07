import axios from "axios";
import { API } from "../config";

const headers = {
    'Content-Type': 'application/json',
    'Authorization': `Bearer ${localStorage.getItem('token')}`
};

const getAllMeals = async () => {
    try {
        const response = await axios.get(API + 'Meal', {headers})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const addMeal = async (meal) => {
    try {
        const response = await axios.post(API + 'Meal', meal, {headers})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const editMeal = async (meal) => {
    try {
        const response = await axios.put(API + `Meal/${meal.mealID}`, meal, {headers})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

// const deleteMeal = async (mealID) => {//not implemented
//     try {
//         var response = await axios.delete(API + `Meal/${mealID}`, {headers})
//         return await response.data;
//     } catch (err) {
//         return err.message;
//     }
// };

export default {
    getAllMeals,
    addMeal,
    editMeal,
    // deleteMeal
}