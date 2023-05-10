import axios from "axios";
import { API, getHeaders, getFormDataHeaders } from "../config";

const getAllMeals = async (params) => {
    try {
        var queryString = '';
        if(params){
            queryString = Object.keys(params)
            .map(key => {
              if (Array.isArray(params[key])) {
                return params[key].map(val => `${encodeURIComponent(key)}=${encodeURIComponent(val)}`).join('&');
              }
              return `${encodeURIComponent(key)}=${encodeURIComponent(params[key])}`;
            })
            .join('&');
        }

        const response = await axios.get(API + 'Meal?' + queryString, {headers: getHeaders()})
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
        const response = await axios.post(API + 'Meal', meal, {headers: getFormDataHeaders()})
        return await response.data;
    } catch (err) {
        return err.message;
    }
};

const editMeal = async (meal, mealID) => {
    try {
        const response = await axios.put(API + `Meal/${mealID}`, meal, {headers: getFormDataHeaders()})
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