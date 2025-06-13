import axios from 'axios';

const task10Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

task10Axios.interceptors.request.use((config) => {
    console.log("Request Sent:", config);
    return config;
}, (error) => {
    console.error("Request Error:", error);
    return Promise.reject(error);
});

task10Axios.interceptors.response.use((response) => {
    console.log("Response Received:", response);
    return response;
}, (error) => {
    console.error("Response Error:", error);
    return Promise.reject(error);
});

export default task10Axios;
