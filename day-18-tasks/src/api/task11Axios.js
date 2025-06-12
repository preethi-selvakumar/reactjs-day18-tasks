import axios from 'axios';

const task11Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default task11Axios;
