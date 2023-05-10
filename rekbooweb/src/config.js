export const API = 'https://localhost/api/';
export const ImageURL = 'https://localhost:5184';
//export const API = 'https://localhost:44305/api/';

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