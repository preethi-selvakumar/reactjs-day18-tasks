import axios from 'axios';

const task13Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default task13Axios;
