import axios from 'axios';

const task12Axios = axios.create({
    baseURL: 'https://jsonplaceholder.typicode.com',
    headers: {
        'Content-Type': 'application/json',
    }
});

task12Axios.interceptors.response.use(
    res => res,
    async (error) => {
        const config = error.config;

        if (!config || config._retry) {
            return Promise.reject(error);
        }

        config._retry = true;
        console.warn('Retrying failed request...');

        // Wait 1 second before retrying
        await new Promise(resolve => setTimeout(resolve, 1000));

        return task12Axios(config);
    }
);

export default task12Axios;
