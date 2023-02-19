export const API = 'https://localhost:44305/api/';
export const getHeaders = () => {
    return{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
};