import axios from 'axios';

const task9Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
        'Authorization': 'Bearer dummy-token-12345'
    }
});

export default task9Axios;
