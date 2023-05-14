 export const API = 'https://beta.rekboo.com/api/';
 export const ImageURL = 'https://beta.rekboo.com';

// export const API = 'https://localhost/api/';
// export const ImageURL = 'https://localhost';


//export const API = 'http://localhost/api/';
//export const ImageURL = 'http://localhost';


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