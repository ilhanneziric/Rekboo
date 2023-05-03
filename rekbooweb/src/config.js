// export const API = 'https://localhost:44305/api/';
// export const API = 'http://localhost:5184/api/';
export const API = 'http://beta.rekboo.com:5184/api/';
export const getHeaders = () => {
    return{
        'Content-Type': 'application/json',
        'Authorization': `Bearer ${localStorage.getItem('token')}`
    };
};