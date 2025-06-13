import axios from 'axios';

const galleryAxios = axios.create({
    baseURL: 'https://api.unsplash.com/',
});

export default galleryAxios;
