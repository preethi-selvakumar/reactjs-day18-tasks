import axios from 'axios';

const miniAxios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

export default miniAxios;
