export const API = 'http://localhost/api/';
//export const API = 'https://localhost:44305/api/';
//export const ImageURL = 'https://localhost:44305';

export const getHeaders = () => {
    return {
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
};

export const getFormDataHeaders = () => {
    return {
        'Content-Type': 'multipart/form-data',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
};