import axios from 'axios';

const productAxios = axios.create({
    baseURL: 'https://fakestoreapi.com',
    headers: {
        'Content-Type': 'application/json',
    },
});

export default productAxios;
